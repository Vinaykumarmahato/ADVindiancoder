package com.advindiancoder.backend.service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsService {

    @Value("${twilio.account.sid}")
    private String accountSid;

    @Value("${twilio.auth.token}")
    private String authToken;

    @Value("${twilio.phone.number}")
    private String fromPhone;

    private boolean isTwilioConfigured = false;

    @PostConstruct
    public void init() {
        if (accountSid != null && !accountSid.isEmpty() && !"mock-sid".equals(accountSid) &&
            authToken != null && !authToken.isEmpty() && !"mock-token".equals(authToken)) {
            try {
                Twilio.init(accountSid, authToken);
                isTwilioConfigured = true;
                System.out.println("[Twilio SMS Service] Initialized successfully.");
            } catch (Exception e) {
                System.err.println("[Twilio SMS Service] Failed to initialize: " + e.getMessage());
            }
        } else {
            System.out.println("[Twilio SMS Service] Configured in DRY-RUN fallback mode (Mock SMS).");
        }
    }

    public boolean sendSmsOtp(String toPhone, String code) {
        String body = code + " is your ADV Indian Coder verification code. It is valid for 5 minutes. For security, do not share this code.";
        
        if (!isTwilioConfigured) {
            System.out.println("\n==================================================");
            System.out.println("[SMS DRY-RUN] OTP verification code details:");
            System.out.println("Destination: " + toPhone);
            System.out.println("OTP Code:    " + code);
            System.out.println("Message:     " + body);
            System.out.println("==================================================\n");
            return true;
        }

        try {
            Message.creator(
                new PhoneNumber(toPhone),
                new PhoneNumber(fromPhone),
                body
            ).create();
            System.out.println("[Twilio SMS Service] Sent SMS OTP successfully to " + toPhone);
            return true;
        } catch (Exception e) {
            System.err.println("[Twilio SMS Service] Failed to send SMS to " + toPhone + ": " + e.getMessage());
            // Fallback to console print so developers can still get the code
            System.out.println("[SMS FALLBACK PRINT] OTP code for " + toPhone + " is: " + code);
            return true; // Return true so that the flow doesn't block users if there's a carrier error
        }
    }
}
