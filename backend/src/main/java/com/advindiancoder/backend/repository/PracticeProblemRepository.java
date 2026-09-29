package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.PracticeProblem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface PracticeProblemRepository extends JpaRepository<PracticeProblem, Long> {
    Optional<PracticeProblem> findBySlug(String slug);
    boolean existsBySlug(String slug);

    public interface ProblemSummaryProjection {
        Long getId();
        String getSlug();
        String getTitle();
        String getDifficulty();
        String getTopic();
        String getCategory();
    }

    public interface SlugTitleProjection {
        String getSlug();
        String getTitle();
    }

    @Query("SELECT p.id as id, p.slug as slug, p.title as title, p.difficulty as difficulty, p.topic as topic, p.category as category FROM PracticeProblem p ORDER BY p.id ASC")
    List<ProblemSummaryProjection> findAllSummaries();

    @Query("SELECT p.slug as slug, p.title as title FROM PracticeProblem p")
    List<SlugTitleProjection> findAllSlugAndTitles();
}

