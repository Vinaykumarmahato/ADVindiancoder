package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.dto.SubmissionSummaryProjection;
import com.advindiancoder.backend.entity.CodeSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface CodeSubmissionRepository extends JpaRepository<CodeSubmission, Long> {
    List<CodeSubmission> findByEmail(String email);

    @Query("SELECT c.timestamp as timestamp, c.success as success FROM CodeSubmission c WHERE c.email = :email")
    List<SubmissionSummaryProjection> findSummaryByEmail(@Param("email") String email);
}
