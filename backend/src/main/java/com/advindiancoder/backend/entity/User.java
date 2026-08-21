package com.advindiancoder.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users", indexes = {
    @Index(name = "idx_users_username", columnList = "username"),
    @Index(name = "idx_users_email", columnList = "email")
})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private String role;

    @Column(name = "avatar_url", length = 500)
    private String avatarUrl;

    @Column(name = "bio", length = 200)
    private String bio;

    @Column(name = "linkedin_url")
    private String linkedinUrl;

    @Column(name = "mobile_number")
    private String mobileNumber;

    @Column(name = "streak", nullable = false)
    private int streak = 0;

    @Column(name = "last_streak_date")
    private java.time.LocalDate lastStreakDate;

    @Column(name = "coding_hours", nullable = false)
    private double codingHours = 0.0;

    @Column(name = "total_compiles", nullable = false)
    private int totalCompiles = 0;

    @Column(name = "successful_compiles", nullable = false)
    private int successfulCompiles = 0;

    @Column(name = "compile_success_rate", nullable = false)
    private double compileSuccessRate = 0.0;

    @Column(name = "exam_mock_score", nullable = false)
    private int examMockScore = 0;

    @Column(name = "projects_json", columnDefinition = "MEDIUMTEXT")
    private String projectsJson = "[]";

    @Column(name = "social_links_json", columnDefinition = "MEDIUMTEXT")
    private String socialLinksJson = "{}";

    @Column(name = "education_json", columnDefinition = "MEDIUMTEXT")
    private String educationJson = "{}";
}
