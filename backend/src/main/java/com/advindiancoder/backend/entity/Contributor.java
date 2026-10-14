package com.advindiancoder.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "contributors", indexes = {
    @Index(name = "idx_contributor_status", columnList = "status"),
    @Index(name = "idx_contributor_category", columnList = "category")
})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Contributor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "display_name", nullable = false)
    private String displayName;

    @Column(name = "photo_url", length = 500)
    private String photoUrl;

    @Column(name = "social_url", length = 500)
    private String socialUrl;

    @Column(name = "contribution_title", nullable = false)
    private String contributionTitle;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(name = "contribution_date", nullable = false)
    private LocalDate contributionDate = LocalDate.now();

    @Column(nullable = false, length = 50)
    private String category = "BUG_BOUNTY"; // BUG_BOUNTY, CODE_IMPROVEMENT, COMMUNITY, SECURITY

    @Column(nullable = false, length = 50)
    private String status = "APPROVED"; // PENDING, APPROVED, REJECTED

    @Column(name = "consent_given", nullable = false)
    private boolean consentGiven = true;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    public Contributor(String displayName, String photoUrl, String socialUrl,
                       String contributionTitle, String description, LocalDate contributionDate,
                       String category, String status, boolean consentGiven) {
        this.displayName = displayName;
        this.photoUrl = photoUrl;
        this.socialUrl = socialUrl;
        this.contributionTitle = contributionTitle;
        this.description = description;
        this.contributionDate = contributionDate;
        this.category = category;
        this.status = status;
        this.consentGiven = consentGiven;
        this.createdAt = LocalDateTime.now();
    }
}
