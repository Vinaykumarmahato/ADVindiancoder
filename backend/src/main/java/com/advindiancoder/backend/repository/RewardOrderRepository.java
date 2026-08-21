package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.RewardOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface RewardOrderRepository extends JpaRepository<RewardOrder, Long> {
    List<RewardOrder> findByUserEmailOrderByCreatedAtDesc(String userEmail);
}