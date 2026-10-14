package com.advindiancoder.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "coin_transactions", indexes = {
    @Index(name = "idx_coin_tx_user_id", columnList = "user_id"),
    @Index(name = "idx_coin_tx_email", columnList = "user_email"),
    @Index(name = "idx_coin_tx_type", columnList = "transaction_type"),
    @Index(name = "idx_coin_tx_ref", columnList = "reference_id")
})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CoinTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "user_email", nullable = false)
    private String userEmail;

    @Column(name = "transaction_type", nullable = false, length = 50)
    private String transactionType; // DSA_PROBLEM_SOLVE, POTD_SOLVE, DAILY_CHECKIN, SECRET_BOX, PROFILE_CREATION, DAY1_BONUS, STREAK_BONUS, SWAG_REDEEM, ADMIN_ADJUSTMENT, LEGACY_CREDIT_PRESERVED

    @Column(name = "amount", nullable = false)
    private int amount; // positive for credits, negative for debits

    @Column(name = "balance_after", nullable = false)
    private int balanceAfter;

    @Column(name = "reference_id")
    private String referenceId; // e.g. problem slug "two-sum", order id "#ADV-SWAG-2", etc.

    @Column(name = "idempotency_key", unique = true)
    private String idempotencyKey; // e.g. "2:DSA_PROBLEM_SOLVE:two-sum"

    @Column(name = "description", nullable = false, length = 500)
    private String description;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    public CoinTransaction(Long userId, String userEmail, String transactionType, int amount,
                           int balanceAfter, String referenceId, String idempotencyKey, String description) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.transactionType = transactionType;
        this.amount = amount;
        this.balanceAfter = balanceAfter;
        this.referenceId = referenceId;
        this.idempotencyKey = idempotencyKey;
        this.description = description;
        this.createdAt = LocalDateTime.now();
    }
}
