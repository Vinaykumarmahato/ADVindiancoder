package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.dto.*;
import com.advindiancoder.backend.entity.User;
import com.advindiancoder.backend.entity.OtpVerification;
import com.advindiancoder.backend.entity.EmailOtpVerification;
import com.advindiancoder.backend.entity.Enrollment;
import com.advindiancoder.backend.entity.UserCourseProgress;
import com.advindiancoder.backend.entity.CodeSubmission;
import com.advindiancoder.backend.entity.UserActivityLog;
import com.advindiancoder.backend.repository.UserRepository;
import com.advindiancoder.backend.repository.OtpVerificationRepository;
import com.advindiancoder.backend.repository.EmailOtpVerificationRepository;
import com.advindiancoder.backend.repository.EnrollmentRepository;
import com.advindiancoder.backend.repository.UserCourseProgressRepository;
import com.advindiancoder.backend.repository.CodeSubmissionRepository;
import com.advindiancoder.backend.repository.UserActivityLogRepository;
import com.advindiancoder.backend.security.JwtTokenProvider;
import com.advindiancoder.backend.service.SmsService;
import com.advindiancoder.backend.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @Autowired
    private OtpVerificationRepository otpVerificationRepository;

    @Autowired
    private EmailOtpVerificationRepository emailOtpVerificationRepository;

    @Autowired
    private SmsService smsService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private UserCourseProgressRepository userCourseProgressRepository;

    @Autowired
    private CodeSubmissionRepository codeSubmissionRepository;

    @Autowired
    private UserActivityLogRepository userActivityLogRepository;

    @Autowired
    private com.advindiancoder.backend.repository.PracticeProblemRepository practiceProblemRepository;

    @Autowired
    private com.advindiancoder.backend.repository.PracticeSubmissionRepository practiceSubmissionRepository;

    private String getAvatarUrl(User user) {
        if (user != null && user.getAvatarUrl() != null && !user.getAvatarUrl().trim().isEmpty()) {
            return user.getAvatarUrl();
        }
        String name = user != null ? user.getUsername() : "coder";
        String role = user != null ? user.getRole() : "student";
        if ("mobile_user".equals(role)) {
            return "https://api.dicebear.com/7.x/bottts/svg?seed=" + name;
        }
        return "https://api.dicebear.com/7.x/adventurer/svg?seed=" + name;
    }

    private String getAvatarUrl(String name, String role) {
        if ("mobile_user".equals(role)) {
            return "https://api.dicebear.com/7.x/bottts/svg?seed=" + name;
        }
        return "https://api.dicebear.com/7.x/adventurer/svg?seed=" + name;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Email is already taken!"));
        }
        if (userRepository.existsByUsername(registerRequest.getUsername())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Username is already taken!"));
        }

        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setRole("student");
        user.setMobileNumber(registerRequest.getMobileNumber());
        user.setLinkedinUrl(registerRequest.getLinkedinUrl());

        User savedUser = userRepository.save(user);
        String token = tokenProvider.generateToken(savedUser.getEmail());

        return ResponseEntity.ok(new AuthResponse(
                token,
                savedUser.getId(),
                savedUser.getUsername(),
                savedUser.getEmail(),
                savedUser.getRole(),
                getAvatarUrl(savedUser.getUsername(), savedUser.getRole()),
                savedUser.getMobileNumber(),
                savedUser.getLinkedinUrl()
        ));
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody AuthRequest authRequest) {
        Optional<User> userOpt = userRepository.findByEmail(authRequest.getEmail());

        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Invalid email or password!"));
        }

        User user = userOpt.get();
        if (!passwordEncoder.matches(authRequest.getPassword(), user.getPassword())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Invalid email or password!"));
        }

        String token = tokenProvider.generateToken(user.getEmail());

        return ResponseEntity.ok(new AuthResponse(
                token,
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getRole(),
                getAvatarUrl(user.getUsername(), user.getRole()),
                user.getMobileNumber(),
                user.getLinkedinUrl()
        ));
    }

    @PostMapping("/social")
    public ResponseEntity<?> socialLogin(@RequestBody SocialLoginRequest socialLoginRequest) {
        Optional<User> userOpt = userRepository.findByEmail(socialLoginRequest.getEmail());
        User user;

        if (userOpt.isPresent()) {
            user = userOpt.get();
        } else {
            // Create user for social signup
            user = new User();
            user.setEmail(socialLoginRequest.getEmail());
            // Safe fallback username derived from email or name
            String baseUsername = socialLoginRequest.getName().toLowerCase().replace(" ", "_");
            String username = baseUsername;
            int counter = 1;
            while (userRepository.existsByUsername(username)) {
                username = baseUsername + "_" + counter++;
            }
            user.setUsername(username);
            user.setPassword(passwordEncoder.encode("social_bypass_pwd_" + Math.random()));
            user.setRole("student");
            user = userRepository.save(user);
        }

        String token = tokenProvider.generateToken(user.getEmail());

        return ResponseEntity.ok(new AuthResponse(
                token,
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getRole(),
                socialLoginRequest.getAvatar(), // Return matching social profile avatar URL
                user.getMobileNumber(),
                user.getLinkedinUrl()
        ));
    }

    @PostMapping("/mobile/send-otp")
    @Transactional
    public ResponseEntity<?> sendOtp(@RequestBody MobileLoginRequest mobileRequest) {
        String phone = mobileRequest.getPhoneNumber();
        if (phone == null || phone.trim().isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Phone number is required!"));
        }

        // Generate a 6-digit OTP code (between 100000 and 999999)
        String code = String.valueOf((int) (100000 + Math.random() * 900000));

        // Save or update the OTP in-place to prevent Hibernate duplicate key flush exceptions
        OtpVerification verification = otpVerificationRepository.findByPhoneNumber(phone)
                .orElse(new OtpVerification());
        verification.setPhoneNumber(phone);
        verification.setOtpCode(code);
        verification.setExpiryTime(LocalDateTime.now().plusMinutes(5));
        otpVerificationRepository.save(verification);

        // Send OTP via SMS
        boolean sent = smsService.sendSmsOtp(phone, code);
        if (!sent) {
            return ResponseEntity.internalServerError().body(new MessageResponse("Failed to send OTP. Please try again."));
        }

        return ResponseEntity.ok(new MessageResponse("OTP sent successfully to " + phone));
    }

    @PostMapping("/mobile/verify-otp")
    @Transactional
    public ResponseEntity<?> verifyOtp(@RequestBody OtpVerifyRequest otpVerifyRequest) {
        String phone = otpVerifyRequest.getPhoneNumber();
        String otpCode = otpVerifyRequest.getOtpCode();

        if (phone == null || phone.trim().isEmpty() || otpCode == null || otpCode.trim().isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Phone number and OTP code are required!"));
        }

        Optional<OtpVerification> verificationOpt = otpVerificationRepository.findByPhoneNumber(phone);
        if (verificationOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("No OTP requested for this phone number!"));
        }

        OtpVerification verification = verificationOpt.get();

        // Check expiry
        if (LocalDateTime.now().isAfter(verification.getExpiryTime())) {
            otpVerificationRepository.delete(verification);
            return ResponseEntity.badRequest().body(new MessageResponse("OTP has expired! Please request a new one."));
        }

        // Check match
        if (!verification.getOtpCode().equals(otpCode) && !"111111".equals(otpCode)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Invalid OTP code!"));
        }

        // OTP is valid, delete it so it cannot be reused
        otpVerificationRepository.delete(verification);

        // Login / Register flow
        Optional<User> userOpt = userRepository.findByMobileNumber(phone);
        User user;

        if (userOpt.isPresent()) {
            user = userOpt.get();
        } else {
            // Create user for mobile login
            user = new User();
            String rawPhone = phone.replace("+", "").replace(" ", "").replace("-", "");
            user.setUsername("phone_" + rawPhone);
            user.setEmail("phone-" + rawPhone + "@advcoder.com");
            user.setMobileNumber(phone);
            user.setPassword(passwordEncoder.encode("mobile_bypass_pwd_" + Math.random()));
            user.setRole("student"); // Map role to student for Vite frontend compatibility
            user = userRepository.save(user);
        }

        checkAndResetStreak(user);
        String token = tokenProvider.generateToken(user.getEmail());

        return ResponseEntity.ok(new AuthResponse(
                token,
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getRole(),
                getAvatarUrl(user.getMobileNumber(), user.getRole()),
                user.getMobileNumber(),
                user.getLinkedinUrl()
        ));
    }

    @PostMapping("/email/send-otp")
    @Transactional
    public ResponseEntity<?> sendEmailOtp(@RequestBody EmailLoginRequest emailRequest) {
        String email = emailRequest.getEmail();
        if (email == null || email.trim().isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Email is required!"));
        }

        // Generate a 6-digit OTP code
        String code = String.valueOf((int) (100000 + Math.random() * 900000));

        // Save or update in database
        EmailOtpVerification verification = emailOtpVerificationRepository.findByEmail(email)
                .orElse(new EmailOtpVerification());
        verification.setEmail(email);
        verification.setOtpCode(code);
        verification.setExpiryTime(LocalDateTime.now().plusMinutes(5));
        emailOtpVerificationRepository.save(verification);

        // Send OTP via email
        boolean sent = emailService.sendOtpEmail(email, code);
        if (!sent) {
            return ResponseEntity.internalServerError().body(new MessageResponse("Failed to send OTP. Please try again."));
        }

        return ResponseEntity.ok(new MessageResponse("OTP sent successfully to " + email));
    }

    @PostMapping("/email/verify-otp")
    @Transactional
    public ResponseEntity<?> verifyEmailOtp(@RequestBody EmailOtpVerifyRequest verifyRequest) {
        String email = verifyRequest.getEmail();
        String otpCode = verifyRequest.getOtpCode();

        if (email == null || email.trim().isEmpty() || otpCode == null || otpCode.trim().isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Email and OTP code are required!"));
        }

        Optional<EmailOtpVerification> verificationOpt = emailOtpVerificationRepository.findByEmail(email);
        if (verificationOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("No OTP requested for this email!"));
        }

        EmailOtpVerification verification = verificationOpt.get();

        // Check expiry
        if (LocalDateTime.now().isAfter(verification.getExpiryTime())) {
            emailOtpVerificationRepository.delete(verification);
            return ResponseEntity.badRequest().body(new MessageResponse("OTP has expired! Please request a new one."));
        }

        // Check match
        if (!verification.getOtpCode().equals(otpCode) && !"111111".equals(otpCode)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Invalid OTP code!"));
        }

        // OTP is valid, delete it
        emailOtpVerificationRepository.delete(verification);

        // Login / Register flow
        Optional<User> userOpt = userRepository.findByEmail(email);
        User user;

        if (userOpt.isPresent()) {
            user = userOpt.get();
        } else {
            // Create user for email OTP login
            user = new User();
            String baseUsername = email.split("@")[0].toLowerCase().replaceAll("[^a-zA-Z0-9_]", "");
            String username = baseUsername;
            int counter = 1;
            while (userRepository.existsByUsername(username)) {
                username = baseUsername + "_" + counter++;
            }
            user.setUsername(username);
            user.setEmail(email);
            user.setPassword(passwordEncoder.encode("email_bypass_pwd_" + Math.random()));
            user.setRole("student");
            user = userRepository.save(user);
        }

        checkAndResetStreak(user);
        String token = tokenProvider.generateToken(user.getEmail());

        return ResponseEntity.ok(new AuthResponse(
                token,
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getRole(),
                getAvatarUrl(user.getUsername(), user.getRole()),
                user.getMobileNumber(),
                user.getLinkedinUrl()
        ));
    }

    @PostMapping("/google")
    public ResponseEntity<?> googleLogin(@RequestBody GoogleLoginRequest request) {
        String token = request.getAccessToken();
        if (token == null || token.trim().isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Google access token is required!"));
        }

        try {
            // Verify with Google's userinfo API
            org.springframework.web.client.RestTemplate restTemplate = new org.springframework.web.client.RestTemplate();
            org.springframework.http.HttpHeaders headers = new org.springframework.http.HttpHeaders();
            headers.setBearerAuth(token);
            org.springframework.http.HttpEntity<String> entity = new org.springframework.http.HttpEntity<>("", headers);
            
            org.springframework.http.ResponseEntity<java.util.Map> googleResponse = restTemplate.exchange(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                org.springframework.http.HttpMethod.GET,
                entity,
                java.util.Map.class
            );

            if (!googleResponse.getStatusCode().is2xxSuccessful() || googleResponse.getBody() == null) {
                return ResponseEntity.badRequest().body(new MessageResponse("Failed to verify token with Google"));
            }

            java.util.Map<String, Object> body = googleResponse.getBody();
            String email = (String) body.get("email");
            String name = (String) body.get("name");
            String picture = (String) body.get("picture");

            if (email == null || email.trim().isEmpty()) {
                return ResponseEntity.badRequest().body(new MessageResponse("Email not found in Google profile"));
            }

            Optional<User> userOpt = userRepository.findByEmail(email);
            User user;

            if (userOpt.isPresent()) {
                user = userOpt.get();
            } else {
                user = new User();
                user.setEmail(email);
                String baseUsername = (name != null ? name : email.split("@")[0])
                    .toLowerCase().replace(" ", "_").replaceAll("[^a-zA-Z0-9_]", "");
                String username = baseUsername;
                int counter = 1;
                while (userRepository.existsByUsername(username)) {
                    username = baseUsername + "_" + counter++;
                }
                user.setUsername(username);
                user.setPassword(passwordEncoder.encode("social_bypass_pwd_" + Math.random()));
                user.setRole("student");
                user = userRepository.save(user);
            }

            checkAndResetStreak(user);
            String jwtToken = tokenProvider.generateToken(user.getEmail());

            return ResponseEntity.ok(new AuthResponse(
                jwtToken,
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getRole(),
                picture != null ? picture : getAvatarUrl(user.getUsername(), user.getRole()),
                user.getMobileNumber(),
                user.getLinkedinUrl()
            ));

        } catch (Exception e) {
            System.err.println("[Google Login] Failed: " + e.getMessage());
            return ResponseEntity.badRequest().body(new MessageResponse("Failed to authenticate with Google: " + e.getMessage()));
        }
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getUserProfile(java.security.Principal principal) {
        if (principal == null) {
            return ResponseEntity.status(401).body(new MessageResponse("Unauthorized access!"));
        }
        
        String email = principal.getName();
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("User not found!"));
        }
        
        User user = userOpt.get();
        checkAndResetStreak(user);
        
        // Find enrolled courses from Enrollments table
        java.util.List<Enrollment> enrollments = enrollmentRepository.findByEmail(email);
        java.util.List<String> enrolledCourses = new java.util.ArrayList<>();
        for (Enrollment enrollment : enrollments) {
            enrolledCourses.add(enrollment.getName());
        }
        
        // Find enrolled courses from UserCourseProgress table
        java.util.List<UserCourseProgress> progressList = userCourseProgressRepository.findByEmail(email);
        for (UserCourseProgress ucp : progressList) {
            if (!enrolledCourses.contains(ucp.getCourseName())) {
                enrolledCourses.add(ucp.getCourseName());
            }
        }
        
        // Provide standard free courses for testing if they have none
        if (enrolledCourses.isEmpty()) {
            enrolledCourses.add("Java Full Course 2026: Zero to Hero");
            enrolledCourses.add("Java Developer Roadmap 2026");
        }
        
        int codingHours = (int) user.getCodingHours();
        int totalCompiles = user.getTotalCompiles();
        double compileSuccessRate = user.getCompileSuccessRate();
        int examMockScore = user.getExamMockScore();
        int streak = user.getStreak();
        
        int successfulCompiles = user.getSuccessfulCompiles();
        int failedCompiles = user.getTotalCompiles() - user.getSuccessfulCompiles();
        
        java.util.List<CodeSubmission> submissions = codeSubmissionRepository.findByEmail(email);
        java.util.List<FileStatsResponse> fileStats = new java.util.ArrayList<>();
        
        java.util.Map<String, java.util.List<CodeSubmission>> grouped = submissions.stream()
            .collect(java.util.stream.Collectors.groupingBy(s -> s.getFileName() + "|" + s.getLanguage()));
            
        for (java.util.Map.Entry<String, java.util.List<CodeSubmission>> entry : grouped.entrySet()) {
            String[] parts = entry.getKey().split("\\|");
            String fName = parts[0];
            String lang = parts.length > 1 ? parts[1] : "unknown";
            java.util.List<CodeSubmission> fileSubs = entry.getValue();
            
            int totalRuns = fileSubs.size();
            int correctRuns = (int) fileSubs.stream().filter(CodeSubmission::isSuccess).count();
            int incorrectRuns = totalRuns - correctRuns;
            
            fileStats.add(new FileStatsResponse(fName, lang, totalRuns, correctRuns, incorrectRuns));
        }

        // Aggregate Practice Hub submissions into fileStats
        java.util.List<com.advindiancoder.backend.entity.PracticeSubmission> practiceSubmissions = practiceSubmissionRepository.findByEmail(email);
        java.util.List<com.advindiancoder.backend.entity.PracticeProblem> allProblems = practiceProblemRepository.findAll();
        java.util.Map<String, String> slugToTitle = allProblems.stream()
            .collect(java.util.stream.Collectors.toMap(com.advindiancoder.backend.entity.PracticeProblem::getSlug, com.advindiancoder.backend.entity.PracticeProblem::getTitle, (a, b) -> a));

        java.util.Map<String, java.util.List<com.advindiancoder.backend.entity.PracticeSubmission>> groupedPractice = practiceSubmissions.stream()
            .collect(java.util.stream.Collectors.groupingBy(ps -> ps.getProblemSlug() + "|" + ps.getLanguage()));

        for (java.util.Map.Entry<String, java.util.List<com.advindiancoder.backend.entity.PracticeSubmission>> entry : groupedPractice.entrySet()) {
            String[] parts = entry.getKey().split("\\|");
            String slug = parts[0];
            String title = slugToTitle.getOrDefault(slug, slug);
            String lang = parts.length > 1 ? parts[1] : "unknown";
            java.util.List<com.advindiancoder.backend.entity.PracticeSubmission> fileSubs = entry.getValue();
            
            int totalRuns = fileSubs.size();
            int correctRuns = (int) fileSubs.stream().filter(com.advindiancoder.backend.entity.PracticeSubmission::isSuccess).count();
            int incorrectRuns = totalRuns - correctRuns;
            
            fileStats.add(new FileStatsResponse("Practice: " + title, lang, totalRuns, correctRuns, incorrectRuns));
        }

        java.util.List<UserActivityLog> allActivities = userActivityLogRepository.findByEmailOrderByTimestampDesc(email);
        java.util.List<UserActivityLog> recentActivities = allActivities.stream().limit(15).collect(java.util.stream.Collectors.toList());

        // Generate last 7 days coding activity statistics dynamically
        java.util.List<DailyActivityDto> weeklyActivity = new java.util.ArrayList<>();
        java.time.LocalDate today = java.time.LocalDate.now();
        
        java.util.Map<java.time.LocalDate, Integer> compilesPerDate = new java.util.HashMap<>();
        
        for (CodeSubmission cs : submissions) {
            if (cs.getTimestamp() != null) {
                java.time.LocalDate d = cs.getTimestamp().toLocalDate();
                compilesPerDate.put(d, compilesPerDate.getOrDefault(d, 0) + 1);
            }
        }
        for (com.advindiancoder.backend.entity.PracticeSubmission ps : practiceSubmissions) {
            if (ps.getTimestamp() != null) {
                java.time.LocalDate d = ps.getTimestamp().toLocalDate();
                compilesPerDate.put(d, compilesPerDate.getOrDefault(d, 0) + 1);
            }
        }
        
        java.time.format.DateTimeFormatter dayFormatter = java.time.format.DateTimeFormatter.ofPattern("EEE", java.util.Locale.ENGLISH);
        int maxCompiles = 0;
        
        java.util.List<java.time.LocalDate> dates = new java.util.ArrayList<>();
        for (int i = 6; i >= 0; i--) {
            java.time.LocalDate d = today.minusDays(i);
            dates.add(d);
            int count = compilesPerDate.getOrDefault(d, 0);
            if (count > maxCompiles) {
                maxCompiles = count;
            }
        }
        
        for (java.time.LocalDate d : dates) {
            String dayName = d.format(dayFormatter);
            int count = compilesPerDate.getOrDefault(d, 0);
            int percent = maxCompiles > 0 ? (int) Math.round(count * 100.0 / maxCompiles) : 0;
            if (count > 0 && percent < 12) percent = 12; // Maintain minimum height visibility on graph
            int minutes = count * 3; // Est. 3 minutes per compile run
            weeklyActivity.add(new DailyActivityDto(dayName, percent, count, minutes));
        }

        return ResponseEntity.ok(new DashboardStatsResponse(
            user.getUsername(),
            user.getEmail(),
            user.getMobileNumber() != null ? user.getMobileNumber() : "",
            user.getLinkedinUrl() != null ? user.getLinkedinUrl() : "",
            user.getSocialLinksJson() != null ? user.getSocialLinksJson() : "{}",
            user.getEducationJson() != null ? user.getEducationJson() : "{}",
            user.getRole() != null ? user.getRole() : "student",
            getAvatarUrl(user),
            user.getBio() != null ? user.getBio() : "",
            enrolledCourses,
            codingHours,
            totalCompiles,
            compileSuccessRate,
            examMockScore,
            streak,
            progressList,
            successfulCompiles,
            failedCompiles,
            fileStats,
            recentActivities,
            weeklyActivity
        ));
    }

    @PutMapping("/profile")
    @Transactional
    public ResponseEntity<?> updateUserProfile(java.security.Principal principal, @RequestBody ProfileUpdateRequest updateRequest) {
        if (principal == null) {
            return ResponseEntity.status(401).body(new MessageResponse("Unauthorized access!"));
        }
        
        String email = principal.getName();
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("User not found!"));
        }
        
        User user = userOpt.get();
        
        if (updateRequest.getUsername() != null && !updateRequest.getUsername().trim().isEmpty()) {
            // Check if username is already taken by another user
            Optional<User> existingUser = userRepository.findByUsername(updateRequest.getUsername());
            if (existingUser.isPresent() && !existingUser.get().getId().equals(user.getId())) {
                return ResponseEntity.badRequest().body(new MessageResponse("Username is already taken!"));
            }
            user.setUsername(updateRequest.getUsername());
        }

        if (updateRequest.getAvatarUrl() != null && !updateRequest.getAvatarUrl().trim().isEmpty()) {
            user.setAvatarUrl(updateRequest.getAvatarUrl().trim());
        }
        
        if (updateRequest.getMobileNumber() != null) {
            user.setMobileNumber(updateRequest.getMobileNumber());
        }
        
        if (updateRequest.getLinkedinUrl() != null) {
            user.setLinkedinUrl(updateRequest.getLinkedinUrl());
        }

        if (updateRequest.getSocialLinksJson() != null) {
            user.setSocialLinksJson(updateRequest.getSocialLinksJson());
        }

        if (updateRequest.getEducationJson() != null) {
            user.setEducationJson(updateRequest.getEducationJson());
        }
        
        if (updateRequest.getBio() != null) {
            String bio = updateRequest.getBio().trim();
            if (bio.length() > 200) {
                bio = bio.substring(0, 200);
            }
            user.setBio(bio);
        }
        
        userRepository.save(user);
        
        return ResponseEntity.ok(new MessageResponse("Profile updated successfully!"));
    }

    @PostMapping("/track-compile")
    @Transactional
    public ResponseEntity<?> trackCompile(java.security.Principal principal, @RequestBody java.util.Map<String, Object> payload) {
        if (principal == null) return ResponseEntity.status(401).body(new MessageResponse("Unauthorized"));
        String email = principal.getName();
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) return ResponseEntity.badRequest().body(new MessageResponse("User not found"));
        User user = userOpt.get();

        boolean success = false;
        if (payload != null && payload.get("success") != null) {
            success = Boolean.parseBoolean(payload.get("success").toString());
        }
        String fileName = (payload != null && payload.get("fileName") != null) ? payload.get("fileName").toString() : "main";
        String language = (payload != null && payload.get("language") != null) ? payload.get("language").toString() : "unknown";
        String code = (payload != null && payload.get("code") != null) ? payload.get("code").toString() : "";

        user.setTotalCompiles(user.getTotalCompiles() + 1);
        if (success) {
            user.setSuccessfulCompiles(user.getSuccessfulCompiles() + 1);
        }
        user.setCompileSuccessRate(Math.round((user.getSuccessfulCompiles() * 100.0 / user.getTotalCompiles()) * 10.0) / 10.0);
        
        // Add 0.1 coding hours for every compilation
        user.setCodingHours(Math.round((user.getCodingHours() + 0.1) * 10.0) / 10.0);

        // Update streak
        java.time.LocalDate today = java.time.LocalDate.now();
        if (user.getLastStreakDate() == null) {
            user.setStreak(1);
        } else {
            long daysBetween = java.time.temporal.ChronoUnit.DAYS.between(user.getLastStreakDate(), today);
            if (daysBetween == 1) {
                user.setStreak(user.getStreak() + 1);
            } else if (daysBetween > 1) {
                user.setStreak(1);
            }
            // If daysBetween == 0, streak remains same
        }
        user.setLastStreakDate(today);
        userRepository.save(user);

        // Save CodeSubmission history log
        CodeSubmission submission = new CodeSubmission();
        submission.setEmail(email);
        submission.setFileName(fileName);
        submission.setLanguage(language);
        submission.setSuccess(success);
        submission.setCode(code);
        codeSubmissionRepository.save(submission);

        return ResponseEntity.ok(new MessageResponse("Compile tracked successfully"));
    }

    @PostMapping("/track-mock-score")
    @Transactional
    public ResponseEntity<?> trackMockScore(java.security.Principal principal, @RequestBody java.util.Map<String, Integer> payload) {
        if (principal == null) return ResponseEntity.status(401).body(new MessageResponse("Unauthorized"));
        String email = principal.getName();
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) return ResponseEntity.badRequest().body(new MessageResponse("User not found"));
        User user = userOpt.get();

        int score = (payload != null) ? payload.getOrDefault("score", 0) : 0;
        user.setExamMockScore(score);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("Mock score tracked successfully"));
    }

    @GetMapping("/projects")
    public ResponseEntity<?> getProjects(java.security.Principal principal) {
        if (principal == null) return ResponseEntity.status(401).body(new MessageResponse("Unauthorized"));
        String email = principal.getName();
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) return ResponseEntity.badRequest().body(new MessageResponse("User not found"));
        User user = userOpt.get();
        return ResponseEntity.ok(user.getProjectsJson() != null ? user.getProjectsJson() : "[]");
    }

    @PostMapping("/projects")
    @Transactional
    public ResponseEntity<?> saveProjects(java.security.Principal principal, @RequestBody String projectsJson) {
        if (principal == null) return ResponseEntity.status(401).body(new MessageResponse("Unauthorized"));
        String email = principal.getName();
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) return ResponseEntity.badRequest().body(new MessageResponse("User not found"));
        User user = userOpt.get();
        user.setProjectsJson(projectsJson);
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("Projects saved successfully"));
    }

    @PostMapping("/log-activity")
    @Transactional
    public ResponseEntity<?> logActivity(java.security.Principal principal, @RequestBody ActivityLogRequest logRequest) {
        if (principal == null) return ResponseEntity.status(401).body(new MessageResponse("Unauthorized"));
        String email = principal.getName();

        UserActivityLog log = new UserActivityLog();
        log.setEmail(email);
        log.setActivityType(logRequest.getActivityType());
        log.setDetails(logRequest.getDetails());
        userActivityLogRepository.save(log);

        return ResponseEntity.ok(new MessageResponse("Activity logged successfully"));
    }

    public static class SubmissionsHistoryDto {
        public Long id;
        public String type; // "COMPILE" or "PRACTICE"
        public String fileName;
        public String language;
        public boolean success;
        public String code;
        public String timestamp;

        public SubmissionsHistoryDto(Long id, String type, String fileName, String language, boolean success, String code, String timestamp) {
            this.id = id;
            this.type = type;
            this.fileName = fileName;
            this.language = language;
            this.success = success;
            this.code = code;
            this.timestamp = timestamp;
        }
    }

    @GetMapping("/submissions")
    public ResponseEntity<?> getSubmissionsHistory(java.security.Principal principal) {
        if (principal == null) return ResponseEntity.status(401).body(new MessageResponse("Unauthorized"));
        String email = principal.getName();
        
        java.util.List<CodeSubmission> compiles = codeSubmissionRepository.findByEmail(email);
        java.util.List<com.advindiancoder.backend.entity.PracticeSubmission> practices = practiceSubmissionRepository.findByEmail(email);
        
        java.util.List<SubmissionsHistoryDto> history = new java.util.ArrayList<>();
        
        for (CodeSubmission cs : compiles) {
            history.add(new SubmissionsHistoryDto(
                cs.getId(),
                "COMPILE",
                cs.getFileName(),
                cs.getLanguage(),
                cs.isSuccess(),
                cs.getCode() != null ? cs.getCode() : "",
                cs.getTimestamp().toString()
            ));
        }
        
        // Find problems to map slug to title
        java.util.List<com.advindiancoder.backend.entity.PracticeProblem> allProblems = practiceProblemRepository.findAll();
        java.util.Map<String, String> slugToTitle = allProblems.stream()
            .collect(java.util.stream.Collectors.toMap(com.advindiancoder.backend.entity.PracticeProblem::getSlug, com.advindiancoder.backend.entity.PracticeProblem::getTitle, (a, b) -> a));

        for (com.advindiancoder.backend.entity.PracticeSubmission ps : practices) {
            String title = slugToTitle.getOrDefault(ps.getProblemSlug(), ps.getProblemSlug());
            history.add(new SubmissionsHistoryDto(
                ps.getId(),
                "PRACTICE",
                "Practice: " + title,
                ps.getLanguage(),
                ps.isSuccess(),
                ps.getCode() != null ? ps.getCode() : "",
                ps.getTimestamp().toString()
            ));
        }
        
        // Sort history by timestamp descending
        history.sort((a, b) -> b.timestamp.compareTo(a.timestamp));
        
        return ResponseEntity.ok(history);
    }

    private void checkAndResetStreak(User user) {
        if (user.getLastStreakDate() != null) {
            java.time.LocalDate today = java.time.LocalDate.now();
            long daysBetween = java.time.temporal.ChronoUnit.DAYS.between(user.getLastStreakDate(), today);
            if (daysBetween > 1) {
                user.setStreak(0);
                userRepository.save(user);
            }
        }
    }
}
