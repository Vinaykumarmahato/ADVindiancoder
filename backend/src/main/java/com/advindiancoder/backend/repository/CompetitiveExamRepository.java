package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.CompetitiveExam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompetitiveExamRepository extends JpaRepository<CompetitiveExam, String> {
}
