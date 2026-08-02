package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.PracticeProblem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface PracticeProblemRepository extends JpaRepository<PracticeProblem, Long> {
    Optional<PracticeProblem> findBySlug(String slug);
    boolean existsBySlug(String slug);
}
