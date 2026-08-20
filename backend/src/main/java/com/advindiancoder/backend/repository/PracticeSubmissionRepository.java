package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.dto.SubmissionSummaryProjection;
import com.advindiancoder.backend.entity.PracticeSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PracticeSubmissionRepository extends JpaRepository<PracticeSubmission, Long> {
    List<PracticeSubmission> findByEmail(String email);
    List<PracticeSubmission> findByEmailAndProblemSlug(String email, String problemSlug);
    boolean existsByEmailAndProblemSlugAndSuccess(String email, String problemSlug, boolean success);

    @Query("SELECT p.timestamp as timestamp, p.success as success FROM PracticeSubmission p WHERE p.email = :email")
    List<SubmissionSummaryProjection> findSummaryByEmail(@Param("email") String email);
}
