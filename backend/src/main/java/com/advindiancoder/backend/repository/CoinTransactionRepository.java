package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.CoinTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CoinTransactionRepository extends JpaRepository<CoinTransaction, Long> {

    List<CoinTransaction> findByUserIdOrderByCreatedAtDesc(Long userId);

    List<CoinTransaction> findByUserEmailOrderByCreatedAtDesc(String userEmail);

    List<CoinTransaction> findByUserEmailIgnoreCaseOrderByCreatedAtDesc(String userEmail);

    boolean existsByIdempotencyKey(String idempotencyKey);

    Optional<CoinTransaction> findByIdempotencyKey(String idempotencyKey);

    @Query("SELECT COALESCE(SUM(t.amount), 0) FROM CoinTransaction t WHERE t.userId = :userId")
    int sumAmountByUserId(@Param("userId") Long userId);

    @Query("SELECT COALESCE(SUM(t.amount), 0) FROM CoinTransaction t WHERE LOWER(t.userEmail) = LOWER(:email)")
    int sumAmountByUserEmail(@Param("email") String email);

    @Query("SELECT COALESCE(SUM(t.amount), 0) FROM CoinTransaction t WHERE LOWER(t.userEmail) = LOWER(:email) AND t.amount > 0")
    int sumEarnedCoinsByUserEmail(@Param("email") String email);

    @Query("SELECT COALESCE(SUM(ABS(t.amount)), 0) FROM CoinTransaction t WHERE LOWER(t.userEmail) = LOWER(:email) AND t.amount < 0")
    int sumSpentCoinsByUserEmail(@Param("email") String email);

    @Query("SELECT COALESCE(SUM(t.amount), 0) FROM CoinTransaction t WHERE t.userId = :userId AND t.amount > 0")
    int sumEarnedCoinsByUserId(@Param("userId") Long userId);

    @Query("SELECT COALESCE(SUM(ABS(t.amount)), 0) FROM CoinTransaction t WHERE t.userId = :userId AND t.amount < 0")
    int sumSpentCoinsByUserId(@Param("userId") Long userId);

    List<CoinTransaction> findByTransactionTypeOrderByCreatedAtDesc(String transactionType);
}
