package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
    java.util.List<Enrollment> findByEmail(String email);
}
