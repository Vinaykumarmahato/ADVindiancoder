package com.advindiancoder.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Tracks daily check-in events per user.
 * One row per user per calendar day — enforced by unique constraint.
 */
@Entity
@Table(
    name = "user_checkins",
    uniqueConstraints = @UniqueConstraint(columnNames = {"user_email", "checkin_date"}),
    indexes = {
        @Index(name = "idx_uc_user_id", columnList = "user_id"),
        @Index(name = "idx_uc_email", columnList = "user_email")
    }
)
public class UserCheckin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "user_email", nullable = false)
    private String userEmail;

    @Column(name = "checkin_date", nullable = false)
    private LocalDate checkinDate;

    @Column(name = "coins_awarded", nullable = false)
    private int coinsAwarded = 1;

    @Column(name = "checkin_type", nullable = false)
    private String checkinType = "DAILY"; // DAILY, SECRET_BOX

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    public UserCheckin() {}

    public UserCheckin(String userEmail, LocalDate checkinDate, int coinsAwarded, String checkinType) {
        this.userEmail = userEmail;
        this.checkinDate = checkinDate;
        this.coinsAwarded = coinsAwarded;
        this.checkinType = checkinType;
    }

    public UserCheckin(Long userId, String userEmail, LocalDate checkinDate, int coinsAwarded, String checkinType) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.checkinDate = checkinDate;
        this.coinsAwarded = coinsAwarded;
        this.checkinType = checkinType;
    }

    public Long getId() { return id; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public String getUserEmail() { return userEmail; }
    public void setUserEmail(String userEmail) { this.userEmail = userEmail; }
    public LocalDate getCheckinDate() { return checkinDate; }
    public void setCheckinDate(LocalDate checkinDate) { this.checkinDate = checkinDate; }
    public int getCoinsAwarded() { return coinsAwarded; }
    public void setCoinsAwarded(int coinsAwarded) { this.coinsAwarded = coinsAwarded; }
    public String getCheckinType() { return checkinType; }
    public void setCheckinType(String checkinType) { this.checkinType = checkinType; }
    public LocalDateTime getCreatedAt() { return createdAt; }
}
