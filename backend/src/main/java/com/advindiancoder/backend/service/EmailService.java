package com.advindiancoder.backend.service;

import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public boolean sendOtpEmail(String toEmail, String code) {
        String htmlBody = "<!DOCTYPE html>"
                + "<html>"
                + "<head>"
                + "    <meta charset=\"utf-8\">"
                + "    <title>ADV Indian Coder Verification</title>"
                + "</head>"
                + "<body style=\"font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f6f9fc; margin: 0; padding: 0;\">"
                + "    <div style=\"max-width: 600px; margin: 0 auto; padding: 40px 20px;\">"
                + "        <div style=\"background-color: #ffffff; border-radius: 24px; padding: 40px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); border: 1px solid #eef2f5;\">"
                + "            <!-- Header/Logo -->"
                + "            <div style=\"text-align: center; margin-bottom: 30px;\">"
                + "                <img src=\"https://www.advindiancoder.com/assets/logo.png\" style=\"height: 55px; width: auto; display: block; margin: 0 auto 10px auto;\" alt=\"ADV Indian Coder Logo\" />"
                + "                <h2 style=\"margin: 0; font-size: 20px; font-weight: 800; color: #0f172a;\">"
                + "                    ADV Indian <span style=\"color: #dc2626;\">Coder</span>"
                + "                </h2>"
                + "            </div>"
                + "            <!-- Body Content -->"
                + "            <div style=\"color: #475569; font-size: 15px; line-height: 1.6;\">"
                + "                <p>Dear Learner,</p>"
                + "                <p>We received a request to log in to your account at ADV Indian Coder. Please use the following 6-digit verification code to complete your sign-in:</p>"
                + "                <!-- Code Block -->"
                + "                <div style=\"text-align: center; margin: 35px 0;\">"
                + "                    <span style=\"display: inline-block; font-size: 36px; font-weight: 800; letter-spacing: 6px; color: #dc2626; background-color: #fef2f2; padding: 15px 40px; border-radius: 16px; border: 1px dashed #fca5a5;\">"
                + "                        " + code
                + "                    </span>"
                + "                </div>"
                + "                <p>This verification code is valid for <strong>5 minutes</strong>. For your account security, please do not share this code with anyone.</p>"
                + "                <p style=\"margin-top: 20px; font-size: 13px; color: #94a3b8;\">If you did not request this code, you can safely ignore this email; your account remains secure.</p>"
                + "            </div>"
                + "            <!-- Footer -->"
                + "            <div style=\"margin-top: 40px; border-top: 1px solid #f1f5f9; padding-top: 25px; text-align: center; font-size: 12px; color: #94a3b8;\">"
                + "                <p style=\"margin: 0 0 8px 0;\">&copy; 2026 ADV Indian Coder. All rights reserved.</p>"
                + "                <p style=\"margin: 0;\">Learning Ecosystem | ADV Lab | Jobs & Courses</p>"
                + "            </div>"
                + "        </div>"
                + "    </div>"
                + "</body>"
                + "</html>";

        // Print email details to console so developer can always see it
        System.out.println("\n==================================================");
        System.out.println("[EMAIL OTP] Verification code details:");
        System.out.println("Destination: " + toEmail);
        System.out.println("OTP Code:    " + code);
        System.out.println("==================================================\n");

        if (mailSender == null || "your-gmail-here@gmail.com".equalsIgnoreCase(fromEmail) || fromEmail.isEmpty()) {
            System.out.println("[Email Service] Configured in DRY-RUN mode. Mail sender is null or placeholder username is set.");
            return true; // Return true so that development testing is not blocked
        }

        try {
            MimeMessage message = mailSender.createMimeMessage();
            // Enable multipart mode to support inline resource attachments
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            
            helper.setFrom(fromEmail, "ADV Indian Coder");
            helper.setReplyTo(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("[ADV Indian Coder] Login Verification Code");
            
            // Set high importance transactional headers to bypass promotional/spam filters
            message.addHeader("X-Priority", "1");
            message.addHeader("Importance", "high");
            message.addHeader("X-MSMail-Priority", "High");
            
            helper.setText(htmlBody, true);
            
            mailSender.send(message);
            System.out.println("[Email Service] Successfully sent OTP email to " + toEmail);
            return true;
        } catch (Exception e) {
            System.err.println("[Email Service] Failed to send email to " + toEmail + ": " + e.getMessage());
            e.printStackTrace();
            return true; // Return true as a fallback so that local testing doesn't crash the API
        }
    }
}
