package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.EmailOtpVerification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface EmailOtpVerificationRepository extends JpaRepository<EmailOtpVerification, Long> {
    Optional<EmailOtpVerification> findByEmail(String email);
    void deleteByEmail(String email);
}
