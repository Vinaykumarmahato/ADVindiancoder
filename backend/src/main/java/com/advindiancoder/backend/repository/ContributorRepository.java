package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.Contributor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContributorRepository extends JpaRepository<Contributor, Long> {

    List<Contributor> findByStatusOrderByContributionDateDesc(String status);

    List<Contributor> findByStatusAndCategoryOrderByContributionDateDesc(String status, String category);

    List<Contributor> findAllByOrderByCreatedAtDesc();

    boolean existsByDisplayNameAndContributionTitle(String displayName, String contributionTitle);
}
