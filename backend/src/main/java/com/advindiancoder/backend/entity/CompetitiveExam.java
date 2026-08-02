package com.advindiancoder.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.List;
import java.util.ArrayList;

@Entity
@Table(name = "competitive_exams")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompetitiveExam {

    @Id
    @Column(length = 100)
    private String id; // e.g., upsc-cse

    @Column(nullable = false, length = 200)
    private String title;

    @Column(name = "full_name", nullable = false, length = 300)
    private String fullName;

    @Column(nullable = false, length = 100)
    private String category;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(length = 50)
    private String icon;

    @Column(name = "years_available", length = 50)
    private String yearsAvailable;

    @Column(name = "total_mcqs")
    private Integer totalMCQs;

    @Column(name = "ai_prediction_accuracy")
    private Double aiPredictionAccuracy;

    @Column(name = "exam_date", length = 100)
    private String examDate;

    @Column(columnDefinition = "TEXT")
    private String subjectsJson; 

    @OneToMany(mappedBy = "exam", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ExamQuestion> questions = new ArrayList<>();
}
