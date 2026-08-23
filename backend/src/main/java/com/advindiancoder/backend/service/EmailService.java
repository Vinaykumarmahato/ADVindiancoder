package com.advindiancoder.backend.service;

import jakarta.mail.internet.MimeMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private static final Logger log = LoggerFactory.getLogger(EmailService.class);
    private static final int MAX_RETRY_ATTEMPTS = 3;

    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Value("${spring.mail.username:advindiancoderchannel@gmail.com}")
    private String fromEmail;

    @Value("${spring.mail.password:}")
    private String mailPassword;

    public boolean sendOtpEmail(String toEmail, String code) {
        String maskedEmail = maskEmail(toEmail);
        log.info("[Email Service] Initiating OTP email dispatch to: {}", maskedEmail);

        if (mailSender == null || mailPassword == null || mailPassword.trim().isEmpty()) {
            log.warn("[Email Service] DRY-RUN MODE: SPRING_MAIL_PASSWORD is not set. Simulation OTP logged for {}", maskedEmail);
            return true;
        }

        String htmlBody = buildOtpHtmlBody(code);

        for (int attempt = 1; attempt <= MAX_RETRY_ATTEMPTS; attempt++) {
            try {
                log.info("[Email Service] Attempt {}/{} - Sending email to {}", attempt, MAX_RETRY_ATTEMPTS, maskedEmail);

                MimeMessage message = mailSender.createMimeMessage();
                MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

                helper.setFrom(fromEmail, "ADV Indian Coder");
                helper.setReplyTo(fromEmail);
                helper.setTo(toEmail);
                helper.setSubject("[ADV Indian Coder] Login Verification Code");

                message.addHeader("X-Priority", "1");
                message.addHeader("Importance", "high");
                message.addHeader("X-MSMail-Priority", "High");

                helper.setText(htmlBody, true);

                mailSender.send(message);
                log.info("[Email Service] SUCCESS: OTP email delivered to {} on attempt {}", maskedEmail, attempt);
                return true;
            } catch (Exception e) {
                log.error("[Email Service] WARNING: Attempt {}/{} failed for {}: {}", attempt, MAX_RETRY_ATTEMPTS, maskedEmail, e.getMessage());
                if (attempt < MAX_RETRY_ATTEMPTS) {
                    try {
                        Thread.sleep(attempt * 800L);
                    } catch (InterruptedException ignored) {
                        Thread.currentThread().interrupt();
                    }
                }
            }
        }

        log.error("[Email Service] ERROR: All {} attempts to send OTP email to {} failed.", MAX_RETRY_ATTEMPTS, maskedEmail);
        return false;
    }

    public boolean sendRewardOrderConfirmationEmail(String toEmail, com.advindiancoder.backend.entity.RewardOrder order) {
        String maskedEmail = maskEmail(toEmail);
        if (mailSender == null || mailPassword == null || mailPassword.trim().isEmpty()) {
            log.info("[Reward Email] DRY-RUN: Order confirmation simulated for #{}", order.getId());
            return true;
        }

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setFrom(fromEmail, "ADV Indian Coder Rewards");
            helper.setReplyTo(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("🎁 Swag Order Confirmed: " + order.getItemName() + " [#ADV-SWAG-" + order.getId() + "]");
            helper.setText(buildRewardHtmlBody(order), true);
            mailSender.send(message);
            log.info("[Reward Email] SUCCESS: Confirmation email delivered to {}", maskedEmail);
            return true;
        } catch (Exception e) {
            log.error("[Reward Email] ERROR: Failed to deliver reward email to {}: {}", maskedEmail, e.getMessage());
            return false;
        }
    }

    private String buildOtpHtmlBody(String code) {
        return "<!DOCTYPE html>"
                + "<html>"
                + "<head><meta charset=\"utf-8\"><title>ADV Indian Coder Verification</title></head>"
                + "<body style=\"font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f6f9fc; margin: 0; padding: 0;\">"
                + "    <div style=\"max-width: 600px; margin: 0 auto; padding: 40px 20px;\">"
                + "        <div style=\"background-color: #ffffff; border-radius: 24px; padding: 40px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); border: 1px solid #eef2f5;\">"
                + "            <div style=\"text-align: center; margin-bottom: 30px;\">"
                + "                <img src=\"https://www.advindiancoder.com/assets/logo.png\" style=\"height: 55px; width: auto; display: block; margin: 0 auto 10px auto;\" alt=\"ADV Indian Coder Logo\" />"
                + "                <h2 style=\"margin: 0; font-size: 20px; font-weight: 800; color: #0f172a;\">"
                + "                    ADV Indian <span style=\"color: #dc2626;\">Coder</span>"
                + "                </h2>"
                + "            </div>"
                + "            <div style=\"color: #475569; font-size: 15px; line-height: 1.6;\">"
                + "                <p>Dear Learner,</p>"
                + "                <p>We received a request to log in to your account at ADV Indian Coder. Please use the following 6-digit verification code to complete your sign-in:</p>"
                + "                <div style=\"text-align: center; margin: 35px 0;\">"
                + "                    <span style=\"display: inline-block; font-size: 36px; font-weight: 800; letter-spacing: 6px; color: #dc2626; background-color: #fef2f2; padding: 15px 40px; border-radius: 16px; border: 1px dashed #fca5a5;\">"
                + "                        " + code
                + "                    </span>"
                + "                </div>"
                + "                <p>This verification code is valid for <strong>5 minutes</strong>. For your account security, please do not share this code with anyone.</p>"
                + "                <p style=\"margin-top: 20px; font-size: 13px; color: #94a3b8;\">If you did not request this code, you can safely ignore this email; your account remains secure.</p>"
                + "            </div>"
                + "            <div style=\"margin-top: 40px; border-top: 1px solid #f1f5f9; padding-top: 25px; text-align: center; font-size: 12px; color: #94a3b8;\">"
                + "                <p style=\"margin: 0 0 8px 0;\">&copy; 2026 ADV Indian Coder. All rights reserved.</p>"
                + "                <p style=\"margin: 0;\">Learning Ecosystem | ADV Lab | Jobs & Courses</p>"
                + "            </div>"
                + "        </div>"
                + "    </div>"
                + "</body></html>";
    }

    private String buildRewardHtmlBody(com.advindiancoder.backend.entity.RewardOrder order) {
        return "<div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; color: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;\">"
                + "<div style=\"background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%); padding: 32px 24px; text-align: center;\">"
                + "<h1 style=\"color: #ffffff; margin: 0; font-size: 24px; font-weight: 800;\">ADV INDIAN CODER</h1>"
                + "<p style=\"color: #fecaca; margin: 6px 0 0 0; font-size: 14px; font-weight: 600;\">Swag & Rewards Order Confirmation 🎁</p>"
                + "</div>"
                + "<div style=\"padding: 32px 24px;\">"
                + "<p style=\"color: #e2e8f0; font-size: 16px; margin: 0 0 16px 0;\">Dear <strong>" + order.getFullName() + "</strong>,</p>"
                + "<p style=\"color: #94a3b8; font-size: 14px; line-height: 1.6;\">Congratulations on your coding achievements! Your swag reward order has been confirmed.</p>"
                + "<div style=\"background-color: #1e293b; border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid #334155;\">"
                + "<p><strong>Order ID:</strong> #ADV-SWAG-" + order.getId() + "</p>"
                + "<p><strong>Item:</strong> " + order.getItemName() + "</p>"
                + "<p><strong>Cost:</strong> 🪙 " + order.getCoinCost() + " ADV Coins</p>"
                + "</div>"
                + "</div></div>";
    }

    private String maskEmail(String email) {
        if (email == null || !email.contains("@")) return "invalid-email";
        String[] parts = email.split("@");
        String name = parts[0];
        String domain = parts[1];
        if (name.length() <= 2) return name.charAt(0) + "***@" + domain;
        return name.charAt(0) + "***" + name.charAt(name.length() - 1) + "@" + domain;
    }
}
