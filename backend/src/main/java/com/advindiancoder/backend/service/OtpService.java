package com.advindiancoder.backend.service;

import com.advindiancoder.backend.entity.EmailOtpVerification;
import com.advindiancoder.backend.entity.OtpVerification;
import com.advindiancoder.backend.repository.EmailOtpVerificationRepository;
import com.advindiancoder.backend.repository.OtpVerificationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OtpService {

    private static final Logger log = LoggerFactory.getLogger(OtpService.class);

    public static final int OTP_EXPIRY_MINUTES = 5;
    public static final int MAX_REQUESTS_PER_WINDOW = 3;
    public static final long RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000L;
    public static final int MAX_VERIFY_ATTEMPTS = 3;

    @Autowired
    private OtpVerificationRepository otpVerificationRepository;

    @Autowired
    private EmailOtpVerificationRepository emailOtpVerificationRepository;

    @Autowired
    private SmsService smsService;

    @Autowired
    private EmailService emailService;

    private final Map<String, RateLimitEntry> requestRateLimitMap = new ConcurrentHashMap<>();
    private final Map<String, Integer> verifyAttemptMap = new ConcurrentHashMap<>();

    private static class RateLimitEntry {
        int count;
        long windowStart;

        RateLimitEntry(int count, long windowStart) {
            this.count = count;
            this.windowStart = windowStart;
        }
    }

    public synchronized boolean isRateLimited(String key) {
        long now = System.currentTimeMillis();
        RateLimitEntry entry = requestRateLimitMap.get(key);

        if (entry == null || (now - entry.windowStart) > RATE_LIMIT_WINDOW_MS) {
            requestRateLimitMap.put(key, new RateLimitEntry(1, now));
            return false;
        }

        if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
            log.warn("[RateLimit] Destination {} exceeded maximum {} requests in 10-minute window.", maskIdentifier(key), MAX_REQUESTS_PER_WINDOW);
            return true;
        }

        entry.count++;
        return false;
    }

    public String generate6DigitCode() {
        return String.valueOf((int) (100000 + Math.random() * 900000));
    }

    public boolean sendMobileOtp(String cleanPhone) {
        String code = generate6DigitCode();
        LocalDateTime expiry = LocalDateTime.now().plusMinutes(OTP_EXPIRY_MINUTES);

        log.info("[OTP Service] Generating Mobile OTP for {}. Expiry: {} minutes", maskIdentifier(cleanPhone), OTP_EXPIRY_MINUTES);

        OtpVerification verification = otpVerificationRepository.findByPhoneNumber(cleanPhone)
                .orElse(new OtpVerification());
        verification.setPhoneNumber(cleanPhone);
        verification.setOtpCode(code);
        verification.setExpiryTime(expiry);
        otpVerificationRepository.save(verification);

        verifyAttemptMap.remove("phone:" + cleanPhone);

        CompletableFuture.runAsync(() -> {
            try {
                smsService.sendSmsOtp(cleanPhone, code);
            } catch (Exception e) {
                log.error("[OTP Service] Async SMS delivery error for {}: {}", maskIdentifier(cleanPhone), e.getMessage());
            }
        });

        return true;
    }

    public boolean sendEmailOtp(String cleanEmail) {
        String code = generate6DigitCode();
        LocalDateTime expiry = LocalDateTime.now().plusMinutes(OTP_EXPIRY_MINUTES);

        log.info("[OTP Service] Generating Email OTP for {}. Expiry: {} minutes", maskIdentifier(cleanEmail), OTP_EXPIRY_MINUTES);

        EmailOtpVerification verification = emailOtpVerificationRepository.findByEmail(cleanEmail)
                .orElse(new EmailOtpVerification());
        verification.setEmail(cleanEmail);
        verification.setOtpCode(code);
        verification.setExpiryTime(expiry);
        emailOtpVerificationRepository.save(verification);

        verifyAttemptMap.remove("email:" + cleanEmail);

        CompletableFuture.runAsync(() -> {
            try {
                emailService.sendOtpEmail(cleanEmail, code);
            } catch (Exception e) {
                log.error("[OTP Service] Async Email delivery error for {}: {}", maskIdentifier(cleanEmail), e.getMessage());
            }
        });

        return true;
    }

    public enum VerifyResult {
        SUCCESS,
        EXPIRED,
        NOT_FOUND,
        INVALID_CODE,
        MAX_ATTEMPTS_EXCEEDED
    }

    public VerifyResult verifyMobileOtp(String cleanPhone, String inputOtp) {
        String attemptKey = "phone:" + cleanPhone;

        Optional<OtpVerification> opt = otpVerificationRepository.findByPhoneNumber(cleanPhone);
        if (opt.isEmpty()) {
            log.warn("[OTP Verify] No active OTP found for {}", maskIdentifier(cleanPhone));
            return VerifyResult.NOT_FOUND;
        }

        OtpVerification record = opt.get();
        if (LocalDateTime.now().isAfter(record.getExpiryTime())) {
            otpVerificationRepository.delete(record);
            log.warn("[OTP Verify] OTP expired for {}", maskIdentifier(cleanPhone));
            return VerifyResult.EXPIRED;
        }

        if (!record.getOtpCode().equals(inputOtp)) {
            int attempts = verifyAttemptMap.getOrDefault(attemptKey, 0) + 1;
            verifyAttemptMap.put(attemptKey, attempts);
            log.warn("[OTP Verify] Incorrect OTP for {}. Attempt: {}/{}", maskIdentifier(cleanPhone), attempts, MAX_VERIFY_ATTEMPTS);

            if (attempts >= MAX_VERIFY_ATTEMPTS) {
                otpVerificationRepository.delete(record);
                verifyAttemptMap.remove(attemptKey);
                return VerifyResult.MAX_ATTEMPTS_EXCEEDED;
            }
            return VerifyResult.INVALID_CODE;
        }

        // Valid OTP -> remove record and attempts
        otpVerificationRepository.delete(record);
        verifyAttemptMap.remove(attemptKey);

        log.info("[OTP Verify] SUCCESS: Mobile OTP verified for {}", maskIdentifier(cleanPhone));
        return VerifyResult.SUCCESS;
    }

    public VerifyResult verifyEmailOtp(String cleanEmail, String inputOtp) {
        String attemptKey = "email:" + cleanEmail;

        Optional<EmailOtpVerification> opt = emailOtpVerificationRepository.findByEmail(cleanEmail);
        if (opt.isEmpty()) {
            log.warn("[OTP Verify] No active OTP found for {}", maskIdentifier(cleanEmail));
            return VerifyResult.NOT_FOUND;
        }

        EmailOtpVerification record = opt.get();
        if (LocalDateTime.now().isAfter(record.getExpiryTime())) {
            emailOtpVerificationRepository.delete(record);
            log.warn("[OTP Verify] Email OTP expired for {}", maskIdentifier(cleanEmail));
            return VerifyResult.EXPIRED;
        }

        if (!record.getOtpCode().equals(inputOtp)) {
            int attempts = verifyAttemptMap.getOrDefault(attemptKey, 0) + 1;
            verifyAttemptMap.put(attemptKey, attempts);
            log.warn("[OTP Verify] Incorrect OTP for {}. Attempt: {}/{}", maskIdentifier(cleanEmail), attempts, MAX_VERIFY_ATTEMPTS);

            if (attempts >= MAX_VERIFY_ATTEMPTS) {
                emailOtpVerificationRepository.delete(record);
                verifyAttemptMap.remove(attemptKey);
                return VerifyResult.MAX_ATTEMPTS_EXCEEDED;
            }
            return VerifyResult.INVALID_CODE;
        }

        // Valid OTP -> remove record and attempts
        emailOtpVerificationRepository.delete(record);
        verifyAttemptMap.remove(attemptKey);

        log.info("[OTP Verify] SUCCESS: Email OTP verified for {}", maskIdentifier(cleanEmail));
        return VerifyResult.SUCCESS;
    }

    private String maskIdentifier(String id) {
        if (id == null) return "***";
        if (id.contains("@")) {
            String[] parts = id.split("@");
            return (parts[0].length() > 2 ? parts[0].charAt(0) + "***" : "***") + "@" + parts[1];
        }
        return id.length() > 4 ? id.substring(0, 3) + "***" + id.substring(id.length() - 2) : "***";
    }
}
