package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.entity.PracticeProblem;
import com.advindiancoder.backend.entity.PracticeSubmission;
import com.advindiancoder.backend.entity.User;
import com.advindiancoder.backend.entity.UserActivityLog;
import com.advindiancoder.backend.repository.PracticeProblemRepository;
import com.advindiancoder.backend.repository.PracticeSubmissionRepository;
import com.advindiancoder.backend.repository.UserRepository;
import com.advindiancoder.backend.repository.UserActivityLogRepository;
import com.advindiancoder.backend.dto.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/practice")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PracticeController {

    @Autowired
    private PracticeProblemRepository problemRepository;

    @Autowired
    private PracticeSubmissionRepository submissionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserActivityLogRepository activityLogRepository;

    // Response structure for the problem list view
    public static class ProblemListItem {
        public Long id;
        public String slug;
        public String title;
        public String difficulty;
        public String topic;
        public String category;
        public String status; // SOLVED, ATTEMPTED, UNTOUCHED

        public ProblemListItem(PracticeProblem prob, String status) {
            this.id = prob.getId();
            this.slug = prob.getSlug();
            this.title = prob.getTitle();
            this.difficulty = prob.getDifficulty();
            this.topic = prob.getTopic();
            this.category = prob.getCategory();
            this.status = status;
        }
    }

    public static class SubmissionPayload {
        public String language;
        public String code;
        public boolean success;
    }

    @GetMapping("/problems")
    public ResponseEntity<?> getProblems(Principal principal) {
        List<PracticeProblem> problems = problemRepository.findAll();
        
        if (principal == null) {
            // Unauthenticated users see all as UNTOUCHED
            List<ProblemListItem> items = problems.stream()
                .map(p -> new ProblemListItem(p, "UNTOUCHED"))
                .collect(Collectors.toList());
            return ResponseEntity.ok(items);
        }

        String email = principal.getName();
        List<PracticeSubmission> userSubs = submissionRepository.findByEmail(email);

        // Group submissions by problem slug
        Map<String, List<PracticeSubmission>> grouped = userSubs.stream()
            .collect(Collectors.groupingBy(PracticeSubmission::getProblemSlug));

        List<ProblemListItem> items = problems.stream().map(p -> {
            List<PracticeSubmission> subs = grouped.get(p.getSlug());
            String status = "UNTOUCHED";
            if (subs != null && !subs.isEmpty()) {
                boolean hasSolved = subs.stream().anyMatch(PracticeSubmission::isSuccess);
                status = hasSolved ? "SOLVED" : "ATTEMPTED";
            }
            return new ProblemListItem(p, status);
        }).collect(Collectors.toList());

        return ResponseEntity.ok(items);
    }

    @GetMapping("/problems/{slug}")
    public ResponseEntity<?> getProblemDetails(@PathVariable String slug) {
        Optional<PracticeProblem> problemOpt = problemRepository.findBySlug(slug);
        if (problemOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(problemOpt.get());
    }

    @PostMapping("/problems/{slug}/submit")
    @Transactional
    public ResponseEntity<?> submitCode(Principal principal, @PathVariable String slug, @RequestBody SubmissionPayload payload) {
        if (principal == null) {
            return ResponseEntity.status(401).body(new MessageResponse("Unauthorized access. Please log in."));
        }
        String email = principal.getName();

        Optional<PracticeProblem> problemOpt = problemRepository.findBySlug(slug);
        if (problemOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Problem not found."));
        }
        PracticeProblem problem = problemOpt.get();

        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("User not found."));
        }
        User user = userOpt.get();

        // 1. Save PracticeSubmission
        PracticeSubmission submission = new PracticeSubmission();
        submission.setEmail(email);
        submission.setProblemSlug(slug);
        submission.setLanguage(payload.language);
        submission.setCode(payload.code);
        submission.setSuccess(payload.success);
        submissionRepository.save(submission);

        // 2. Log Activity
        UserActivityLog activity = new UserActivityLog();
        activity.setEmail(email);
        activity.setActivityType("PRACTICE_SUBMIT");
        String resultText = payload.success ? "Solved" : "Attempted";
        activity.setDetails(resultText + " practice problem \"" + problem.getTitle() + "\" in " + payload.language);
        activityLogRepository.save(activity);

        // 3. Update User Coding Stats
        user.setTotalCompiles(user.getTotalCompiles() + 1);
        if (payload.success) {
            user.setSuccessfulCompiles(user.getSuccessfulCompiles() + 1);
        }
        user.setCompileSuccessRate(Math.round((user.getSuccessfulCompiles() * 100.0 / user.getTotalCompiles()) * 10.0) / 10.0);
        user.setCodingHours(Math.round((user.getCodingHours() + 0.1) * 10.0) / 10.0);

        // Update Streak
        LocalDate today = LocalDate.now();
        if (user.getLastStreakDate() == null) {
            user.setStreak(1);
        } else {
            long daysBetween = java.time.temporal.ChronoUnit.DAYS.between(user.getLastStreakDate(), today);
            if (daysBetween == 1) {
                user.setStreak(user.getStreak() + 1);
            } else if (daysBetween > 1) {
                user.setStreak(1);
            }
        }
        user.setLastStreakDate(today);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("Practice submission tracked successfully. Status: " + resultText));
    }
}
