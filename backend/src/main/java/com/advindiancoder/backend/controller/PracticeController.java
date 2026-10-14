package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.entity.PracticeProblem;
import com.advindiancoder.backend.entity.PracticeSubmission;
import com.advindiancoder.backend.entity.User;
import com.advindiancoder.backend.entity.UserActivityLog;
import com.advindiancoder.backend.entity.CoinTransaction;
import com.advindiancoder.backend.repository.PracticeProblemRepository;
import com.advindiancoder.backend.repository.PracticeProblemRepository.ProblemSummaryProjection;
import com.advindiancoder.backend.repository.PracticeSubmissionRepository;
import com.advindiancoder.backend.repository.UserRepository;
import com.advindiancoder.backend.repository.UserActivityLogRepository;
import com.advindiancoder.backend.repository.CoinTransactionRepository;
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

    @Autowired private PracticeProblemRepository problemRepository;
    @Autowired private PracticeSubmissionRepository submissionRepository;
    @Autowired private UserRepository userRepository;
    @Autowired private UserActivityLogRepository activityLogRepository;
    @Autowired private CoinTransactionRepository coinTransactionRepository;

    // ── Coin reward policy constants (single source of truth) ────────────────
    /** Coins awarded for a first-time successful solve of the Problem of the Day */
    private static final int COINS_POTD_SOLVE = 10;
    /** Coins awarded for a first-time successful solve of any regular DSA problem */
    private static final int COINS_PROBLEM_SOLVE = 2;
    /** No coins for failed submissions or repeat solves of the same problem */
    private static final int COINS_NONE = 0;

    // ── Inner DTOs ────────────────────────────────────────────────────────────

    public static class ProblemListItem {
        public Long id; public String slug; public String title;
        public String difficulty; public String topic; public String category;
        public String status;
        public ProblemListItem(ProblemSummaryProjection p, String status) {
            this.id = p.getId(); this.slug = p.getSlug(); this.title = p.getTitle();
            this.difficulty = p.getDifficulty(); this.topic = p.getTopic();
            this.category = p.getCategory(); this.status = status;
        }
        public ProblemListItem(PracticeProblem p, String status) {
            this.id = p.getId(); this.slug = p.getSlug(); this.title = p.getTitle();
            this.difficulty = p.getDifficulty(); this.topic = p.getTopic();
            this.category = p.getCategory(); this.status = status;
        }
    }

    public static class SubmissionPayload {
        public String language;
        public String code;
        public boolean success;
    }

    public static class PotdResponse {
        public String date; public ProblemListItem problem;
        public int rewardCoins; public boolean hasSolvedToday;
        public PotdResponse(String date, ProblemListItem p, int coins, boolean solved) {
            this.date = date; this.problem = p; this.rewardCoins = coins; this.hasSolvedToday = solved;
        }
    }

    public static class SubmissionResultResponse {
        public String message; public String status; public boolean isPotd;
        public int coinsEarned; public int potdSolves; public int streak;
        public int successfulCompiles; public int totalCompiles;
        public SubmissionResultResponse(String message, String status, boolean isPotd,
                                        int coinsEarned, int potdSolves, int streak,
                                        int successfulCompiles, int totalCompiles) {
            this.message = message; this.status = status; this.isPotd = isPotd;
            this.coinsEarned = coinsEarned; this.potdSolves = potdSolves; this.streak = streak;
            this.successfulCompiles = successfulCompiles; this.totalCompiles = totalCompiles;
        }
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    /** Deterministically picks today's POTD from all problems using epoch day mod */
    private ProblemSummaryProjection getTodayPotdProblem(List<ProblemSummaryProjection> all) {
        if (all == null || all.isEmpty()) return null;
        int dayIndex = (int) Math.abs(LocalDate.now().toEpochDay()) % all.size();
        return all.get(dayIndex);
    }

    // ── Endpoints ─────────────────────────────────────────────────────────────

    @GetMapping("/potd")
    public ResponseEntity<?> getProblemOfTheDay(Principal principal) {
        List<ProblemSummaryProjection> all = problemRepository.findAllSummaries();
        if (all.isEmpty()) return ResponseEntity.notFound().build();
        ProblemSummaryProjection potd = getTodayPotdProblem(all);
        if (potd == null) return ResponseEntity.notFound().build();

        LocalDate today = LocalDate.now();
        boolean hasSolvedToday = false;
        String status = "UNTOUCHED";

        if (principal != null) {
            String email = principal.getName();
            List<PracticeSubmission> subs = submissionRepository.findByEmail(email);
            for (PracticeSubmission s : subs) {
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
        return ResponseEntity.ok(new PotdResponse(today.toString(), new ProblemListItem(potd, status), COINS_POTD_SOLVE, hasSolvedToday));
    }

    @GetMapping("/problems")
    public ResponseEntity<?> getProblems(Principal principal) {
        List<ProblemSummaryProjection> problems = problemRepository.findAllSummaries();
        if (principal == null) {
            return ResponseEntity.ok(problems.stream().map(p -> new ProblemListItem(p, "UNTOUCHED")).collect(Collectors.toList()));
        }
        String email = principal.getName();
        List<PracticeSubmission> userSubs = submissionRepository.findByEmail(email);
        Map<String, List<PracticeSubmission>> grouped = userSubs.stream()
            .collect(Collectors.groupingBy(PracticeSubmission::getProblemSlug));
        List<ProblemListItem> items = problems.stream().map(p -> {
            List<PracticeSubmission> subs = grouped.get(p.getSlug());
            String st = "UNTOUCHED";
            if (subs != null && !subs.isEmpty()) {
                st = subs.stream().anyMatch(PracticeSubmission::isSuccess) ? "SOLVED" : "ATTEMPTED";
            }
            return new ProblemListItem(p, st);
        }).collect(Collectors.toList());
        return ResponseEntity.ok(items);
    }

    @GetMapping("/problems/{slug}")
    public ResponseEntity<?> getProblemDetails(@PathVariable String slug) {
        return problemRepository.findBySlug(slug)
            .<ResponseEntity<?>>map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // ── Submit endpoint — idempotent coin rewards ─────────────────────────────
    @PostMapping("/problems/{slug}/submit")
    @Transactional
    public ResponseEntity<?> submitCode(Principal principal,
                                        @PathVariable String slug,
                                        @RequestBody SubmissionPayload payload) {
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
            return ResponseEntity.badRequest().body(new MessageResponse("User account not found. Please re-authenticate."));
        }
        User user = userOpt.get();
        LocalDate today = LocalDate.now();

        // 1. Save submission record (always record every attempt)
        PracticeSubmission submission = new PracticeSubmission();
        submission.setUserId(user.getId());
        submission.setEmail(email);
        submission.setProblemSlug(slug);
        submission.setLanguage(payload.language);
        submission.setCode(payload.code);
        submission.setSuccess(payload.success);
        submissionRepository.save(submission);

        // 2. Determine if this is today's POTD
        List<ProblemSummaryProjection> allProblems = problemRepository.findAllSummaries();
        ProblemSummaryProjection todayPotd = getTodayPotdProblem(allProblems);
        boolean isPotd = todayPotd != null && slug.equals(todayPotd.getSlug());

        // 3. Determine coin eligibility using IDEMPOTENCY KEY — prevents duplicate rewards
        int coinsEarned = COINS_NONE;
        String idempotencyKey = null;
        String txType = null;
        String txDesc = null;

        if (payload.success) {
            if (isPotd) {
                // POTD reward: one per POTD solve per calendar day
                idempotencyKey = user.getId() + ":POTD_SOLVE:" + slug + ":" + today.toString();
                boolean alreadyAwardedPotdToday = coinTransactionRepository.existsByIdempotencyKey(idempotencyKey);
                if (!alreadyAwardedPotdToday) {
                    coinsEarned = COINS_POTD_SOLVE;
                    txType = "POTD_SOLVE";
                    txDesc = "Solved Problem of the Day: " + problem.getTitle() + " (+10 ADV Coins)";
                    user.setPotdSolves(user.getPotdSolves() + 1);
                }
            } else {
                // Regular problem reward: one per unique problem (first-time solve only)
                idempotencyKey = user.getId() + ":DSA_PROBLEM_SOLVE:" + slug;
                boolean alreadyAwardedThisProblem = coinTransactionRepository.existsByIdempotencyKey(idempotencyKey);
                if (!alreadyAwardedThisProblem) {
                    coinsEarned = COINS_PROBLEM_SOLVE;
                    txType = "DSA_PROBLEM_SOLVE";
                    txDesc = "Solved DSA problem \"" + problem.getTitle() + "\" (+2 ADV Coins)";
                }
            }
        }

        // 4. Record coin transaction if earned
        if (coinsEarned > 0 && idempotencyKey != null && txType != null) {
            // Get current balance from ledger
            int currentBalance = coinTransactionRepository.sumAmountByUserId(user.getId());
            CoinTransaction tx = new CoinTransaction(
                user.getId(), email, txType, coinsEarned,
                currentBalance + coinsEarned, slug, idempotencyKey, txDesc
            );
            coinTransactionRepository.save(tx);
        }

        // 5. Log activity
        String resultText = payload.success ? "Solved" : "Attempted";
        String potdPrefix = (isPotd && payload.success) ? "🌟 [POTD] " : "";
        String coinNotice = (coinsEarned > 0) ? " (+" + coinsEarned + " ADV Coins)" : "";
        UserActivityLog activity = new UserActivityLog();
        activity.setUserId(user.getId());
        activity.setEmail(email);
        activity.setActivityType(isPotd && payload.success ? "POTD_SOLVE" : "PRACTICE_SUBMIT");
        activity.setDetails(potdPrefix + resultText + " practice problem \"" + problem.getTitle() + "\" in " + payload.language + coinNotice);
        activityLogRepository.save(activity);

        // 6. Update user coding stats
        user.setTotalCompiles(user.getTotalCompiles() + 1);
        if (payload.success) {
            user.setSuccessfulCompiles(user.getSuccessfulCompiles() + 1);
        }
        if (user.getTotalCompiles() > 0) {
            user.setCompileSuccessRate(Math.round((user.getSuccessfulCompiles() * 100.0 / user.getTotalCompiles()) * 10.0) / 10.0);
        }
        user.setCodingHours(Math.round((user.getCodingHours() + 0.1) * 10.0) / 10.0);

        // 7. Update streak
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
            "Practice submission recorded. Status: " + resultText,
            resultText, isPotd, coinsEarned,
            user.getPotdSolves(), user.getStreak(),
            user.getSuccessfulCompiles(), user.getTotalCompiles()
        ));
    }
}
