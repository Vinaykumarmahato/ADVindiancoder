package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.RewardOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface RewardOrderRepository extends JpaRepository<RewardOrder, Long> {
    List<RewardOrder> findByUserEmailOrderByCreatedAtDesc(String userEmail);
    List<RewardOrder> findByUserEmailIgnoreCaseOrderByCreatedAtDesc(String userEmail);
    List<RewardOrder> findByUserIdOrderByCreatedAtDesc(Long userId);
    Optional<RewardOrder> findByTrackingNumber(String trackingNumber);
    Optional<RewardOrder> findByTrackingNumberIgnoreCase(String trackingNumber);
}