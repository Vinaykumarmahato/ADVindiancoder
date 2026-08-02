package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.entity.NewsletterSubscription;
import com.advindiancoder.backend.repository.NewsletterSubscriptionRepository;
import com.advindiancoder.backend.dto.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/newsletter")
@CrossOrigin(origins = "*", maxAge = 3600)
public class NewsletterController {

    @Autowired
    private NewsletterSubscriptionRepository subscriptionRepository;

    @PostMapping("/subscribe")
    public ResponseEntity<?> subscribe(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        if (email == null || email.trim().isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Email is required!"));
        }

        email = email.trim().toLowerCase();
        
        if (subscriptionRepository.existsByEmail(email)) {
            return ResponseEntity.ok(new MessageResponse("You are already subscribed to our newsletter!"));
        }

        NewsletterSubscription sub = new NewsletterSubscription();
        sub.setEmail(email);
        subscriptionRepository.save(sub);

        return ResponseEntity.ok(new MessageResponse("Subscribed successfully! Thank you for joining us."));
    }
}
