package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.entity.RewardOrder;
import com.advindiancoder.backend.entity.User;
import com.advindiancoder.backend.entity.UserActivityLog;
import com.advindiancoder.backend.entity.UserCheckin;
import com.advindiancoder.backend.repository.RewardOrderRepository;
import com.advindiancoder.backend.repository.UserRepository;
import com.advindiancoder.backend.repository.UserActivityLogRepository;
import com.advindiancoder.backend.repository.UserCheckinRepository;
import com.advindiancoder.backend.service.CoinService;
import com.advindiancoder.backend.service.EmailService;
import com.advindiancoder.backend.dto.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping("/api/rewards")
@CrossOrigin(origins = "*", maxAge = 3600)
public class RewardsController {

    @Autowired private RewardOrderRepository rewardOrderRepository;
    @Autowired private UserRepository userRepository;
    @Autowired private UserActivityLogRepository activityLogRepository;
    @Autowired private UserCheckinRepository userCheckinRepository;
    @Autowired private CoinService coinService;
    @Autowired private EmailService emailService;

    // ─────────────────────────────────────────────────────────────────────────
    // GET /api/rewards/my-orders
    // ─────────────────────────────────────────────────────────────────────────
    @GetMapping("/my-orders")
    public ResponseEntity<?> getMyOrders(Principal principal) {
        if (principal == null) return ResponseEntity.status(401).body(new MessageResponse("Unauthorized"));
        List<RewardOrder> orders = rewardOrderRepository.findByUserEmailOrderByCreatedAtDesc(principal.getName());
        return ResponseEntity.ok(orders);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // POST /api/rewards/checkin
    // Handles both DAILY check-in and SECRET_BOX claim
    // ─────────────────────────────────────────────────────────────────────────
    @PostMapping("/checkin")
    @Transactional
    public ResponseEntity<?> dailyCheckin(Principal principal,
                                          @RequestBody Map<String, String> body) {
        if (principal == null) return ResponseEntity.status(401).body(new MessageResponse("Please log in to claim your daily check-in."));
        String email = principal.getName();

        String type = body.getOrDefault("type", "DAILY").toUpperCase();
        if (!type.equals("DAILY") && !type.equals("SECRET_BOX")) {
            return ResponseEntity.badRequest().body(new MessageResponse("Invalid checkin type."));
        }

        LocalDate today = LocalDate.now();

        // DAILY: one per calendar day
        if (type.equals("DAILY")) {
            boolean alreadyClaimed = userCheckinRepository
                .findByUserEmailAndCheckinDateAndCheckinType(email, today, "DAILY")
                .isPresent();
            if (alreadyClaimed) {
                return ResponseEntity.badRequest().body(new MessageResponse("You have already claimed your daily check-in today. Come back tomorrow!"));
            }
            UserCheckin checkin = new UserCheckin(email, today, 1, "DAILY");
            userCheckinRepository.save(checkin);

            // Log activity
            UserActivityLog log = new UserActivityLog();
            log.setEmail(email);
            log.setActivityType("DAILY_CHECKIN");
            log.setDetails("Claimed daily login check-in (+1 coin)");
            activityLogRepository.save(log);

            Map<String, Object> resp = new HashMap<>();
            resp.put("message", "🎉 +1 Daily Check-in Coin added to your wallet!");
            resp.put("coinsAwarded", 1);
            return ResponseEntity.ok(resp);
        }

        // SECRET_BOX: one-time only (any date)
        if (type.equals("SECRET_BOX")) {
            boolean alreadyClaimed = userCheckinRepository.existsByUserEmailAndCheckinType(email, "SECRET_BOX");
            if (alreadyClaimed) {
                return ResponseEntity.badRequest().body(new MessageResponse("You have already claimed the Secret Mystery Gift!"));
            }
            UserCheckin checkin = new UserCheckin(email, today, 10, "SECRET_BOX");
            userCheckinRepository.save(checkin);

            UserActivityLog log = new UserActivityLog();
            log.setEmail(email);
            log.setActivityType("SECRET_BOX_CLAIM");
            log.setDetails("Claimed Secret Mystery Gift Easter Egg (+10 coins)");
            activityLogRepository.save(log);

            Map<String, Object> resp = new HashMap<>();
            resp.put("message", "🎁 Amazing! You found the Secret Mystery Gift: +10 Free Coins added!");
            resp.put("coinsAwarded", 10);
            return ResponseEntity.ok(resp);
        }

        return ResponseEntity.badRequest().body(new MessageResponse("Unknown error."));
    }

    // ─────────────────────────────────────────────────────────────────────────
    // POST /api/rewards/order
    // Places a reward order with server-side coin validation
    // ─────────────────────────────────────────────────────────────────────────
    public static class PlaceOrderRequest {
        public String itemId;
        public String itemName;
        public String itemCategory;
        public int coinCost;
        public int inrPrice;
        public String paymentMode; // "coins" or "cash"
        public String fullName;
        public String phone;
        public String addressLine;
        public String city;
        public String state;
        public String pincode;
        public String apparelSize;
        public String upiTransactionId; // for cash payments
    }

    @PostMapping("/order")
    @Transactional
    public ResponseEntity<?> placeRewardOrder(Principal principal,
                                               @RequestBody PlaceOrderRequest request) {
        if (principal == null) return ResponseEntity.status(401).body(new MessageResponse("Please log in to redeem rewards."));
        String email = principal.getName();

        // Validate shipping address
        if (isBlank(request.fullName) || isBlank(request.phone) ||
            isBlank(request.addressLine) || isBlank(request.city) || isBlank(request.pincode)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Please complete all required shipping address fields."));
        }

        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) return ResponseEntity.badRequest().body(new MessageResponse("User account not found."));
        User user = userOpt.get();

        String mode = (request.paymentMode != null) ? request.paymentMode.toLowerCase() : "coins";

        // ── Coin redemption: validate server-side balance ──────────────────
        if (mode.equals("coins")) {
            if (request.coinCost <= 0) {
                return ResponseEntity.badRequest().body(new MessageResponse("Invalid coin cost."));
            }
            CoinService.CoinBalance balance = coinService.calculateBalance(user);
            if (balance.availableCoins < request.coinCost) {
                return ResponseEntity.badRequest().body(new MessageResponse(
                    "Insufficient coins. You have " + balance.availableCoins +
                    " coins but this item costs " + request.coinCost + " coins."
                ));
            }
        }

        // Create and persist order
        RewardOrder order = new RewardOrder();
        order.setUserEmail(email);
        order.setItemId(request.itemId);
        order.setItemName(request.itemName);
        order.setItemCategory(request.itemCategory);
        order.setCoinCost(mode.equals("coins") ? request.coinCost : 0);
        order.setFullName(request.fullName.trim());
        order.setPhone(request.phone.trim());
        order.setAddressLine(request.addressLine.trim());
        order.setCity(request.city.trim());
        order.setState(request.state != null ? request.state.trim() : "India");
        order.setPincode(request.pincode.trim());
        order.setApparelSize(request.apparelSize);
        order.setStatus("CONFIRMED");
        order.setTrackingNumber("ADV-" + (100000 + new Random().nextInt(900000)));
        RewardOrder savedOrder = rewardOrderRepository.save(order);

        // Log activity
        String detail = mode.equals("coins")
            ? "Redeemed \"" + request.itemName + "\" for " + request.coinCost + " ADV Coins (Order #" + savedOrder.getId() + ")"
            : "Purchased \"" + request.itemName + "\" via Cash/UPI ₹" + request.inrPrice + " (Order #" + savedOrder.getId() + ")";

        UserActivityLog activity = new UserActivityLog();
        activity.setEmail(email);
        activity.setActivityType("REWARD_REDEEM");
        activity.setDetails(detail);
        activityLogRepository.save(activity);

        // Send email confirmation
        try {
            emailService.sendRewardOrderConfirmationEmail(email, savedOrder);
        } catch (Exception e) {
            System.err.println("[Rewards] Email notice: " + e.getMessage());
        }

        Map<String, Object> response = new HashMap<>();
        response.put("message", "Swag reward order placed! A confirmation has been sent to your email.");
        response.put("orderId", savedOrder.getId());
        response.put("trackingNumber", savedOrder.getTrackingNumber());
        response.put("status", savedOrder.getStatus());
        return ResponseEntity.ok(response);
    }

    private boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }
}