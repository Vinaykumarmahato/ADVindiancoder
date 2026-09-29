package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.entity.PracticeProblem;
import com.advindiancoder.backend.entity.PracticeSubmission;
import com.advindiancoder.backend.entity.User;
import com.advindiancoder.backend.entity.UserActivityLog;
import com.advindiancoder.backend.repository.PracticeProblemRepository;
import com.advindiancoder.backend.repository.PracticeProblemRepository.ProblemSummaryProjection;
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

        public ProblemListItem(ProblemSummaryProjection prob, String status) {
            this.id = prob.getId();
            this.slug = prob.getSlug();
            this.title = prob.getTitle();
            this.difficulty = prob.getDifficulty();
            this.topic = prob.getTopic();
            this.category = prob.getCategory();
            this.status = status;
        }

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

    public static class PotdResponse {
        public String date;
        public ProblemListItem problem;
        public int rewardCoins;
        public boolean hasSolvedToday;

        public PotdResponse(String date, ProblemListItem problem, int rewardCoins, boolean hasSolvedToday) {
            this.date = date;
            this.problem = problem;
            this.rewardCoins = rewardCoins;
            this.hasSolvedToday = hasSolvedToday;
        }
    }

    public static class SubmissionResultResponse {
        public String message;
        public String status;
        public boolean isPotd;
        public int coinsEarned;
        public int potdSolves;
        public int streak;
        public int successfulCompiles;
        public int totalCompiles;

        public SubmissionResultResponse(String message, String status, boolean isPotd, int coinsEarned, int potdSolves, int streak, int successfulCompiles, int totalCompiles) {
            this.message = message;
            this.status = status;
            this.isPotd = isPotd;
            this.coinsEarned = coinsEarned;
            this.potdSolves = potdSolves;
            this.streak = streak;
            this.successfulCompiles = successfulCompiles;
            this.totalCompiles = totalCompiles;
        }
    }

    // Helper method to deterministically calculate today's POTD problem
    private ProblemSummaryProjection getTodayPotdProblem(List<ProblemSummaryProjection> allProblems) {
        if (allProblems == null || allProblems.isEmpty()) return null;
        LocalDate today = LocalDate.now();
        // Deterministic daily index: combines epoch day hash to cycle through all challenges evenly
        int dayIndex = (int) Math.abs(today.toEpochDay()) % allProblems.size();
        return allProblems.get(dayIndex);
    }

    @GetMapping("/potd")
    public ResponseEntity<?> getProblemOfTheDay(Principal principal) {
        List<ProblemSummaryProjection> allProblems = problemRepository.findAllSummaries();
        if (allProblems.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        ProblemSummaryProjection potd = getTodayPotdProblem(allProblems);
        if (potd == null) {
            return ResponseEntity.notFound().build();
        }

        LocalDate today = LocalDate.now();
        String todayStr = today.toString();
        boolean hasSolvedToday = false;
        String status = "UNTOUCHED";

        if (principal != null) {
            String email = principal.getName();
            List<PracticeSubmission> userSubs = submissionRepository.findByEmail(email);
            for (PracticeSubmission s : userSubs) {
                if (potd.getSlug().equals(s.getProblemSlug())) {
                    if (s.isSuccess()) {
                        status = "SOLVED";
                        if (s.getTimestamp() != null && s.getTimestamp().toLocalDate().isEqual(today)) {
                            hasSolvedToday = true;
                        }
                    } else if (!"SOLVED".equals(status)) {
                        status = "ATTEMPTED";
                    }
                }
            }
        }

        ProblemListItem potdItem = new ProblemListItem(potd, status);
        return ResponseEntity.ok(new PotdResponse(todayStr, potdItem, 10, hasSolvedToday));
    }

    @GetMapping("/problems")
    public ResponseEntity<?> getProblems(Principal principal) {
        List<ProblemSummaryProjection> problems = problemRepository.findAllSummaries();
        
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

        LocalDate today = LocalDate.now();

        // 1. Save PracticeSubmission
        PracticeSubmission submission = new PracticeSubmission();
        submission.setEmail(email);
        submission.setProblemSlug(slug);
        submission.setLanguage(payload.language);
        submission.setCode(payload.code);
        submission.setSuccess(payload.success);
        submissionRepository.save(submission);

        // Check if this problem is today's Problem of the Day (POTD)
        List<ProblemSummaryProjection> allProblems = problemRepository.findAllSummaries();
        ProblemSummaryProjection todayPotd = getTodayPotdProblem(allProblems);
        boolean isPotd = todayPotd != null && slug.equals(todayPotd.getSlug());

        // Check if user has already solved this POTD today before this submission
        boolean alreadySolvedPotdToday = false;
        if (isPotd && payload.success) {
            List<PracticeSubmission> userSubs = submissionRepository.findByEmail(email);
            for (PracticeSubmission ps : userSubs) {
                if (!ps.getId().equals(submission.getId()) && ps.isSuccess() && slug.equals(ps.getProblemSlug())) {
                    if (ps.getTimestamp() != null && ps.getTimestamp().toLocalDate().isEqual(today)) {
                        alreadySolvedPotdToday = true;
                        break;
                    }
                }
            }
        }

        int coinsEarned = 0;
        if (payload.success) {
            if (isPotd && !alreadySolvedPotdToday) {
                user.setPotdSolves(user.getPotdSolves() + 1);
                coinsEarned = 10;
            } else {
                coinsEarned = 2;
            }
        }

        // 2. Log Activity
        UserActivityLog activity = new UserActivityLog();
        activity.setEmail(email);
        activity.setActivityType(isPotd && payload.success ? "POTD_SOLVE" : "PRACTICE_SUBMIT");
        String resultText = payload.success ? "Solved" : "Attempted";
        String potdPrefix = (isPotd && payload.success) ? "🌟 [POTD] " : "";
        String coinNotice = (payload.success && coinsEarned > 0) ? " (+" + coinsEarned + " ADV Coins)" : "";
        activity.setDetails(potdPrefix + resultText + " practice problem \"" + problem.getTitle() + "\" in " + payload.language + coinNotice);
        activityLogRepository.save(activity);

        // 3. Update User Coding Stats
        user.setTotalCompiles(user.getTotalCompiles() + 1);
        if (payload.success) {
            user.setSuccessfulCompiles(user.getSuccessfulCompiles() + 1);
        }
        user.setCompileSuccessRate(Math.round((user.getSuccessfulCompiles() * 100.0 / user.getTotalCompiles()) * 10.0) / 10.0);
        user.setCodingHours(Math.round((user.getCodingHours() + 0.1) * 10.0) / 10.0);

        // Update Streak
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

        return ResponseEntity.ok(new SubmissionResultResponse(
            "Practice submission tracked successfully. Status: " + resultText,
            resultText,
            isPotd,
            coinsEarned,
            user.getPotdSolves(),
            user.getStreak(),
            user.getSuccessfulCompiles(),
            user.getTotalCompiles()
        ));
    }
}

