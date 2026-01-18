package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.model.User;
import com.advindiancoder.backend.payload.request.LoginRequest;
import com.advindiancoder.backend.payload.request.SignupRequest;
import com.advindiancoder.backend.payload.response.JwtResponse;
import com.advindiancoder.backend.payload.response.MessageResponse;
import com.advindiancoder.backend.repository.UserRepository;
import com.advindiancoder.backend.security.jwt.JwtUtils;
import com.advindiancoder.backend.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Map;
import java.util.HashMap;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    private static final List<String> BLOCKED_DOMAINS = Arrays.asList(
        "tempmail.com", "tempmail.net", "tempmail.org", "tempmailbox.com",
        "tempmailaddress.com", "mailinator.com", "dispostable.com", "trashmail.com",
        "guerrillamail.com", "yopmail.com", "10minutemail.com", "sharklasers.com",
        "dropmail.me", "getnada.com", "inboxkitten.com", "fakeinbox.com",
        "maildrop.cc", "mintemail.com", "spam4.me", "lroid.com",
        "moakt.cc", "mytrashmail.com"
    );

    private boolean isTempEmail(String email) {
        String domain = email.substring(email.indexOf("@") + 1).toLowerCase();
        return BLOCKED_DOMAINS.contains(domain);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        if (isTempEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Temporary email addresses are not allowed."));
        }

        // Create new user's account
        User user = new User();
        user.setUsername(signUpRequest.getUsername());
        user.setEmail(signUpRequest.getEmail());
        user.setMobileNumber(signUpRequest.getMobileNumber());
        user.setLinkedinUrl(signUpRequest.getLinkedinUrl());
        user.setPassword(encoder.encode(signUpRequest.getPassword()));
        user.setRole("USER");

        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @Autowired
    com.advindiancoder.backend.service.EmailService emailService;

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        if (email == null || !userRepository.existsByEmail(email)) {
             return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email not found!"));
        }

        // Generate a random token (in a real app, save this to DB with expiry)
        String token = java.util.UUID.randomUUID().toString();
        
        // For now, we just send the token in the email. 
        // In a real app, you'd save it to the user record or a password reset token table.
        
        // Use HashRouter format for the link
        String resetLink = "http://localhost:5173/#/reset-password?token=" + token + "&email=" + email;
        
        String htmlContent = """
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9; }
                    .header { text-align: center; padding-bottom: 20px; border-bottom: 1px solid #e0e0e0; }
                    .header h1 { color: #d32f2f; margin: 0; }
                    .content { padding: 20px 0; text-align: center; }
                    .button { display: inline-block; padding: 12px 24px; background-color: #d32f2f; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 20px; }
                    .footer { text-align: center; font-size: 12px; color: #777; margin-top: 20px; border-top: 1px solid #e0e0e0; padding-top: 10px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>ADV Indian Coder</h1>
                    </div>
                    <div class="content">
                        <h2>Password Reset Request</h2>
                        <p>Hello,</p>
                        <p>We received a request to reset your password. If you didn't make this request, you can safely ignore this email.</p>
                        <p>To reset your password, click the button below:</p>
                        <a href="%s" class="button">Reset Password</a>
                        <p style="margin-top: 20px;">Or copy and paste this link into your browser:</p>
                        <p><a href="%s">%s</a></p>
                    </div>
                    <div class="footer">
                        <p>Best Regards,</p>
                        <p><strong>Vinay Kumar Mahato</strong></p>
                        <p>Subscribe my YouTube channel: <a href="https://www.youtube.com/@ADVIndianCoder-i9y">ADV Indian Coder</a></p>
                        <p>Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/vinay-kumar860964/">Vinay Kumar</a></p>
                        <p>Follow me on Instagram: <a href="https://www.instagram.com/vinay_software_engineer/">vinay_software_engineer</a></p>
                        <p>&copy; 2024 ADV Indian Coder. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
            """.formatted(resetLink, resetLink, resetLink);
        
        try {
            emailService.sendHtmlMessage(email, "Reset Your Password - ADV Indian Coder", htmlContent);
            return ResponseEntity.ok(new MessageResponse("If an account exists with that email, a reset link has been sent."));
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Could not send email. " + e.getMessage()));
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String newPassword = request.get("newPassword");
        // String token = request.get("token"); // In real app, verify token

        if (email == null || newPassword == null) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Invalid request"));
        }

        User user = userRepository.findByEmail(email)
                .orElse(null);

        if (user == null) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: User not found"));
        }

        user.setPassword(encoder.encode(newPassword));
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("Password reset successfully!"));
    }
}
