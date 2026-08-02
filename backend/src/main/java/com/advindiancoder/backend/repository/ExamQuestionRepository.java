package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.ExamQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExamQuestionRepository extends JpaRepository<ExamQuestion, String> {
    List<ExamQuestion> findByExamId(String examId);
}
