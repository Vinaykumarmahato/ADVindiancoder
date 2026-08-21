package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.dto.DailyActivityDto;
import com.advindiancoder.backend.dto.SubmissionSummaryProjection;
import com.advindiancoder.backend.entity.User;
import com.advindiancoder.backend.entity.UserActivityLog;
import com.advindiancoder.backend.repository.UserRepository;
import com.advindiancoder.backend.repository.CodeSubmissionRepository;
import com.advindiancoder.backend.repository.PracticeProblemRepository;
import com.advindiancoder.backend.repository.PracticeSubmissionRepository;
import com.advindiancoder.backend.repository.UserActivityLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/api/public")
public class PublicProfileController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CodeSubmissionRepository codeSubmissionRepository;

    @Autowired
    private PracticeProblemRepository practiceProblemRepository;

    @Autowired
    private PracticeSubmissionRepository practiceSubmissionRepository;

    @Autowired
    private UserActivityLogRepository userActivityLogRepository;

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

    @GetMapping("/profile/{username}")
    public ResponseEntity<?> getPublicProfile(@PathVariable String username) {
        Optional<User> userOpt = userRepository.findByUsername(username);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).body(new com.advindiancoder.backend.dto.MessageResponse("User not found"));
        }

        User user = userOpt.get();
        String email = user.getEmail();

        // Calculate Stats
        int codingHours = (int) user.getCodingHours();
        int totalCompiles = user.getTotalCompiles();
        double compileSuccessRate = user.getCompileSuccessRate();
        int streak = user.getStreak();
        int successfulCompiles = user.getSuccessfulCompiles();
        int failedCompiles = user.getTotalCompiles() - user.getSuccessfulCompiles();

        // High-performance light projections to bypass reading megabytes of code text from DB
        java.util.List<SubmissionSummaryProjection> submissions = codeSubmissionRepository.findSummaryByEmail(email);
        java.util.List<SubmissionSummaryProjection> practiceSubmissions = practiceSubmissionRepository.findSummaryByEmail(email);
        
        // Push LIMIT 15 down to database engine
        java.util.List<UserActivityLog> recentActivities = userActivityLogRepository.findTop15ByEmailOrderByTimestampDesc(email);

        // Weekly Activity Calculation
        java.util.List<DailyActivityDto> weeklyActivity = new java.util.ArrayList<>();
        java.time.LocalDate today = java.time.LocalDate.now();
        java.util.Map<java.time.LocalDate, Integer> compilesPerDate = new java.util.HashMap<>();
        
        for (SubmissionSummaryProjection cs : submissions) {
            if (cs.getTimestamp() != null) {
                java.time.LocalDate d = cs.getTimestamp().toLocalDate();
                compilesPerDate.put(d, compilesPerDate.getOrDefault(d, 0) + 1);
            }
        }
        for (SubmissionSummaryProjection ps : practiceSubmissions) {
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
            if (count > 0 && percent < 12) percent = 12; 
            int minutes = count * 3; 
            weeklyActivity.add(new DailyActivityDto(dayName, percent, count, minutes));
        }

        java.util.Map<String, Object> publicProfile = new java.util.HashMap<>();
        publicProfile.put("username", user.getUsername());
        publicProfile.put("avatar", getAvatarUrl(user));
        publicProfile.put("linkedinUrl", user.getLinkedinUrl() != null ? user.getLinkedinUrl() : "");
        publicProfile.put("socialLinksJson", user.getSocialLinksJson() != null ? user.getSocialLinksJson() : "{}");
        publicProfile.put("educationJson", user.getEducationJson() != null ? user.getEducationJson() : "{}");
        publicProfile.put("bio", user.getBio() != null ? user.getBio() : "");
        
        publicProfile.put("codingHours", codingHours);
        publicProfile.put("streak", streak);
        publicProfile.put("successfulCompiles", successfulCompiles);
        publicProfile.put("failedCompiles", failedCompiles);
        publicProfile.put("totalCompiles", totalCompiles);
        publicProfile.put("compileSuccessRate", compileSuccessRate);
        
        publicProfile.put("recentActivities", recentActivities);
        publicProfile.put("weeklyActivity", weeklyActivity);

        // Include raw practice submissions for Contribution Graph (lightweight map)
        java.util.List<java.util.Map<String, Object>> lightSubmissions = new java.util.ArrayList<>();
        for (SubmissionSummaryProjection ps : practiceSubmissions) {
            java.util.Map<String, Object> lightPs = new java.util.HashMap<>();
            lightPs.put("timestamp", ps.getTimestamp());
            lightPs.put("success", ps.isSuccess());
            lightSubmissions.add(lightPs);
        }
        for (SubmissionSummaryProjection cs : submissions) {
             java.util.Map<String, Object> lightCs = new java.util.HashMap<>();
             lightCs.put("timestamp", cs.getTimestamp());
             lightCs.put("success", cs.isSuccess());
             lightSubmissions.add(lightCs);
        }
        publicProfile.put("submissions", lightSubmissions);
        
        // Add Cache-Control header for sub-millisecond edge and browser caching on shared links
        return ResponseEntity.ok()
                .header("Cache-Control", "public, max-age=60, s-maxage=300, stale-while-revalidate=600")
                .body(publicProfile);
    }
}
