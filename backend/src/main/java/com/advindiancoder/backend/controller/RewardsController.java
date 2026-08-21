package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.entity.RewardOrder;
import com.advindiancoder.backend.entity.User;
import com.advindiancoder.backend.entity.UserActivityLog;
import com.advindiancoder.backend.repository.RewardOrderRepository;
import com.advindiancoder.backend.repository.UserRepository;
import com.advindiancoder.backend.repository.UserActivityLogRepository;
import com.advindiancoder.backend.service.EmailService;
import com.advindiancoder.backend.dto.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.*;

@RestController
@RequestMapping("/api/rewards")
@CrossOrigin(origins = "*", maxAge = 3600)
public class RewardsController {

    @Autowired
    private RewardOrderRepository rewardOrderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserActivityLogRepository activityLogRepository;

    @Autowired
    private EmailService emailService;

    public static class PlaceOrderRequest {
        public String itemId;
        public String itemName;
        public String itemCategory;
        public int coinCost;
        public String fullName;
        public String phone;
        public String addressLine;
        public String city;
        public String state;
        public String pincode;
        public String apparelSize;
    }

    @GetMapping("/my-orders")
    public ResponseEntity<?> getMyOrders(Principal principal) {
        if (principal == null) {
            return ResponseEntity.status(401).body(new MessageResponse("Unauthorized"));
        }
        String email = principal.getName();
        List<RewardOrder> orders = rewardOrderRepository.findByUserEmailOrderByCreatedAtDesc(email);
        return ResponseEntity.ok(orders);
    }

    @PostMapping("/order")
    @Transactional
    public ResponseEntity<?> placeRewardOrder(Principal principal, @RequestBody PlaceOrderRequest request) {
        if (principal == null) {
            return ResponseEntity.status(401).body(new MessageResponse("Please log in to redeem rewards."));
        }
        String email = principal.getName();

        if (request.fullName == null || request.fullName.trim().isEmpty() ||
            request.phone == null || request.phone.trim().isEmpty() ||
            request.addressLine == null || request.addressLine.trim().isEmpty() ||
            request.city == null || request.city.trim().isEmpty() ||
            request.pincode == null || request.pincode.trim().isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Please complete all required shipping address fields."));
        }

        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("User account not found."));
        }
        User user = userOpt.get();

        // 1. Create and persist RewardOrder
        RewardOrder order = new RewardOrder();
        order.setUserEmail(email);
        order.setItemId(request.itemId);
        order.setItemName(request.itemName);
        order.setItemCategory(request.itemCategory);
        order.setCoinCost(request.coinCost);
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

        // 2. Log Activity
        UserActivityLog activity = new UserActivityLog();
        activity.setEmail(email);
        activity.setActivityType("REWARD_REDEEM");
        activity.setDetails("Redeemed \"" + request.itemName + "\" for " + request.coinCost + " ADV Coins (Order #" + savedOrder.getId() + ")");
        activityLogRepository.save(activity);

        // 3. Dispatch Email Confirmation Receipt
        try {
            emailService.sendRewardOrderConfirmationEmail(email, savedOrder);
        } catch (Exception e) {
            System.err.println("[Rewards] Email delivery notice: " + e.getMessage());
        }

        Map<String, Object> response = new HashMap<>();
        response.put("message", "Swag reward order placed successfully! A confirmation receipt has been sent to your email.");
        response.put("orderId", savedOrder.getId());
        response.put("trackingNumber", savedOrder.getTrackingNumber());
        response.put("status", savedOrder.getStatus());

        return ResponseEntity.ok(response);
    }
}