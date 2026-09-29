package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.UserCheckin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.Optional;

@Repository
public interface UserCheckinRepository extends JpaRepository<UserCheckin, Long> {

    /** Check if a specific checkin type already exists for today */
    Optional<UserCheckin> findByUserEmailAndCheckinDateAndCheckinType(
        String userEmail, LocalDate checkinDate, String checkinType
    );

    /** Total coins earned via daily check-ins (sum of all awarded coins) */
    @Query("SELECT COALESCE(SUM(c.coinsAwarded), 0) FROM UserCheckin c WHERE c.userEmail = :email")
    int sumCoinsByEmail(String email);

    /** Total coins earned via a specific type */
    @Query("SELECT COALESCE(SUM(c.coinsAwarded), 0) FROM UserCheckin c WHERE c.userEmail = :email AND c.checkinType = :type")
    int sumCoinsByEmailAndType(String email, String type);

    /** Check if secret box already claimed (any date) */
    boolean existsByUserEmailAndCheckinType(String userEmail, String checkinType);
}
