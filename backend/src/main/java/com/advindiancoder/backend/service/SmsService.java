package com.advindiancoder.backend.service;

import com.twilio.Twilio;
import com.twilio.exception.TwilioException;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsService {

    private static final Logger log = LoggerFactory.getLogger(SmsService.class);
    private static final int MAX_RETRY_ATTEMPTS = 3;

    @Value("${twilio.account.sid:}")
    private String accountSid;

    @Value("${twilio.auth.token:}")
    private String authToken;

    @Value("${twilio.phone.number:}")
    private String fromPhone;

    private boolean isTwilioConfigured = false;

    @PostConstruct
    public void init() {
        if (accountSid != null && !accountSid.trim().isEmpty() && !"mock-sid".equalsIgnoreCase(accountSid)
                && authToken != null && !authToken.trim().isEmpty() && !"mock-token".equalsIgnoreCase(authToken)) {
            try {
                Twilio.init(accountSid.trim(), authToken.trim());
                isTwilioConfigured = true;
                String maskedSid = accountSid.length() > 6 ? accountSid.substring(0, 4) + "****" + accountSid.substring(accountSid.length() - 4) : "AC****";
                log.info("[Twilio SMS Service] Initialized successfully with Account SID: {}", maskedSid);
            } catch (Exception e) {
                log.error("[Twilio SMS Service] Failed to initialize Twilio SDK: {}", e.getMessage());
            }
        } else {
            log.warn("[Twilio SMS Service] DRY-RUN MODE: Twilio credentials not fully set. Mock mode active.");
        }
    }

    public boolean sendSmsOtp(String toPhone, String code) {
        String formattedToPhone = formatE164(toPhone);
        String maskedPhone = maskPhone(formattedToPhone);
        String body = code + " is your ADV Indian Coder verification code. It is valid for 5 minutes. Do not share this code.";

        log.info("[Twilio SMS Service] Preparing SMS dispatch to: {}", maskedPhone);

        if (!isTwilioConfigured) {
            log.warn("[Twilio SMS Service] DRY-RUN: SMS simulated for destination: {}", maskedPhone);
            return true;
        }

        String formattedFromPhone = formatE164(fromPhone);

        for (int attempt = 1; attempt <= MAX_RETRY_ATTEMPTS; attempt++) {
            try {
                log.info("[Twilio SMS Service] Attempt {}/{} - Sending SMS to {}", attempt, MAX_RETRY_ATTEMPTS, maskedPhone);

                Message message = Message.creator(
                        new PhoneNumber(formattedToPhone),
                        new PhoneNumber(formattedFromPhone),
                        body
                ).create();

                log.info("[Twilio SMS Service] SUCCESS: SMS dispatched! SID: {}, Status: {}, Destination: {}",
                        message.getSid(), message.getStatus(), maskedPhone);
                return true;
            } catch (TwilioException e) {
                log.error("[Twilio SMS Service] WARNING: Twilio API error on attempt {}/{} for {}: {}",
                        attempt, MAX_RETRY_ATTEMPTS, maskedPhone, e.getMessage());
                if (attempt < MAX_RETRY_ATTEMPTS) {
                    try {
                        Thread.sleep(attempt * 800L);
                    } catch (InterruptedException ignored) {
                        Thread.currentThread().interrupt();
                    }
                }
            } catch (Exception e) {
                log.error("[Twilio SMS Service] WARNING: Unexpected error sending SMS on attempt {}/{} to {}: {}",
                        attempt, MAX_RETRY_ATTEMPTS, maskedPhone, e.getMessage());
                if (attempt < MAX_RETRY_ATTEMPTS) {
                    try {
                        Thread.sleep(attempt * 800L);
                    } catch (InterruptedException ignored) {
                        Thread.currentThread().interrupt();
                    }
                }
            }
        }

        log.error("[Twilio SMS Service] ERROR: All {} attempts to send SMS to {} failed.", MAX_RETRY_ATTEMPTS, maskedPhone);
        return false;
    }

    private String formatE164(String phone) {
        if (phone == null) return "";
        String cleaned = phone.replaceAll("[^0-9+]", "").trim();
        if (!cleaned.startsWith("+")) {
            if (cleaned.length() == 10) {
                cleaned = "+91" + cleaned;
            } else {
                cleaned = "+" + cleaned;
            }
        }
        return cleaned;
    }

    private String maskPhone(String phone) {
        if (phone == null || phone.length() < 6) return "***";
        return phone.substring(0, Math.min(4, phone.length())) + "****" + phone.substring(Math.max(0, phone.length() - 2));
    }
}
