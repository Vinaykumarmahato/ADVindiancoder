package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.CodeSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CodeSubmissionRepository extends JpaRepository<CodeSubmission, Long> {
    List<CodeSubmission> findByEmail(String email);
}
