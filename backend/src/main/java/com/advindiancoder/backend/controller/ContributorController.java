package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.entity.Contributor;
import com.advindiancoder.backend.repository.ContributorRepository;
import com.advindiancoder.backend.dto.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.security.Principal;
import java.time.LocalDate;
import java.util.*;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/api/contributors")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ContributorController {

    @Autowired
    private ContributorRepository contributorRepository;

    // Simple URL validation pattern
    private static final Pattern URL_PATTERN = Pattern.compile(
        "^(https?://)[a-zA-Z0-9.-]+(:\\d+)?(/.*)?$"
    );

    // ─────────────────────────────────────────────────────────────────────────
    // GET /api/contributors  — public list of APPROVED contributors
    // ─────────────────────────────────────────────────────────────────────────
    @GetMapping
    public ResponseEntity<?> listContributors(@RequestParam(defaultValue = "") String category) {
        List<Contributor> list;
        if (!category.isEmpty()) {
            list = contributorRepository.findByStatusAndCategoryOrderByContributionDateDesc("APPROVED", category.toUpperCase());
        } else {
            list = contributorRepository.findByStatusOrderByContributionDateDesc("APPROVED");
        }
        // Strip social URLs from contributors who have not given consent
        list.forEach(c -> {
            if (!c.isConsentGiven()) {
                c.setPhotoUrl(null);
                c.setSocialUrl(null);
            }
        });
        return ResponseEntity.ok(list);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // POST /api/contributors/admin  — admin-only create contributor entry
    // ─────────────────────────────────────────────────────────────────────────
    public static class ContributorRequest {
        public String displayName;
        public String photoUrl;
        public String socialUrl;
        public String contributionTitle;
        public String description;
        public String contributionDate; // ISO date: yyyy-MM-dd
        public String category;        // BUG_BOUNTY, CODE_IMPROVEMENT, COMMUNITY, SECURITY
        public boolean consentGiven;
    }

    @PostMapping("/admin")
    @Transactional
    public ResponseEntity<?> createContributor(Principal principal,
                                               @RequestBody ContributorRequest req) {
        if (principal == null) {
            return ResponseEntity.status(401).body(new MessageResponse("Authentication required."));
        }
        // Validate required fields
        if (isBlank(req.displayName) || isBlank(req.contributionTitle) || isBlank(req.description)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Display name, title and description are required."));
        }
        // Sanitize: strip any HTML/script from text fields
        req.displayName = sanitize(req.displayName);
        req.contributionTitle = sanitize(req.contributionTitle);
        req.description = sanitize(req.description);

        // Validate URLs
        if (!isBlank(req.photoUrl) && !isValidUrl(req.photoUrl)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Invalid photo URL format."));
        }
        if (!isBlank(req.socialUrl) && !isValidUrl(req.socialUrl)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Invalid social URL format."));
        }

        // Prevent duplicates
        if (contributorRepository.existsByDisplayNameAndContributionTitle(req.displayName, req.contributionTitle)) {
            return ResponseEntity.badRequest().body(new MessageResponse("A contributor entry with this name and title already exists."));
        }

        LocalDate date;
        try {
            date = req.contributionDate != null ? LocalDate.parse(req.contributionDate) : LocalDate.now();
        } catch (Exception e) {
            date = LocalDate.now();
        }

        String category = req.category != null ? req.category.toUpperCase() : "BUG_BOUNTY";
        if (!Set.of("BUG_BOUNTY", "CODE_IMPROVEMENT", "COMMUNITY", "SECURITY").contains(category)) {
            category = "BUG_BOUNTY";
        }

        Contributor c = new Contributor(
            req.displayName.trim(),
            req.consentGiven && !isBlank(req.photoUrl) ? req.photoUrl.trim() : null,
            req.consentGiven && !isBlank(req.socialUrl) ? req.socialUrl.trim() : null,
            req.contributionTitle.trim(),
            req.description.trim(),
            date,
            category,
            "APPROVED",
            req.consentGiven
        );

        Contributor saved = contributorRepository.save(c);
        return ResponseEntity.ok(saved);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // PUT /api/contributors/admin/{id}  — admin-only update entry
    // ─────────────────────────────────────────────────────────────────────────
    @PutMapping("/admin/{id}")
    @Transactional
    public ResponseEntity<?> updateContributor(Principal principal,
                                               @PathVariable Long id,
                                               @RequestBody ContributorRequest req) {
        if (principal == null) {
            return ResponseEntity.status(401).body(new MessageResponse("Authentication required."));
        }
        Optional<Contributor> optC = contributorRepository.findById(id);
        if (optC.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Contributor c = optC.get();
        if (!isBlank(req.displayName)) c.setDisplayName(sanitize(req.displayName).trim());
        if (!isBlank(req.contributionTitle)) c.setContributionTitle(sanitize(req.contributionTitle).trim());
        if (!isBlank(req.description)) c.setDescription(sanitize(req.description).trim());
        if (req.consentGiven) {
            if (!isBlank(req.photoUrl) && isValidUrl(req.photoUrl)) c.setPhotoUrl(req.photoUrl.trim());
            if (!isBlank(req.socialUrl) && isValidUrl(req.socialUrl)) c.setSocialUrl(req.socialUrl.trim());
        } else {
            c.setPhotoUrl(null);
            c.setSocialUrl(null);
        }
        c.setConsentGiven(req.consentGiven);
        if (!isBlank(req.contributionDate)) {
            try { c.setContributionDate(LocalDate.parse(req.contributionDate)); } catch (Exception ignored) {}
        }
        return ResponseEntity.ok(contributorRepository.save(c));
    }

    // ─────────────────────────────────────────────────────────────────────────
    // DELETE /api/contributors/admin/{id}  — admin-only remove entry
    // ─────────────────────────────────────────────────────────────────────────
    @DeleteMapping("/admin/{id}")
    @Transactional
    public ResponseEntity<?> deleteContributor(Principal principal, @PathVariable Long id) {
        if (principal == null) {
            return ResponseEntity.status(401).body(new MessageResponse("Authentication required."));
        }
        if (!contributorRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        contributorRepository.deleteById(id);
        return ResponseEntity.ok(new MessageResponse("Contributor entry removed."));
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Helpers
    // ─────────────────────────────────────────────────────────────────────────
    private boolean isBlank(String s) { return s == null || s.trim().isEmpty(); }

    private boolean isValidUrl(String url) {
        if (isBlank(url)) return false;
        try {
            URI.create(url);
            return URL_PATTERN.matcher(url).matches();
        } catch (Exception e) {
            return false;
        }
    }

    /** Strip HTML tags and angle brackets to prevent XSS in stored text */
    private String sanitize(String input) {
        if (input == null) return "";
        return input.replaceAll("<[^>]*>", "").replaceAll("[<>]", "").trim();
    }
}
