package com.advindiancoder.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "exam_questions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExamQuestion {

    @Id
    @Column(length = 100)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "exam_id", nullable = false)
    @JsonIgnore
    private CompetitiveExam exam;

    @Column(nullable = false, length = 50)
    private String year; // String because "AI Predicted 2026" or "2024"

    @Column(nullable = false, length = 150)
    private String subject;

    @Column(nullable = false, length = 200)
    private String topic;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String question;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String optionsJson; // Store the 4 options as a JSON array string

    @Column(name = "correct_option_index", nullable = false)
    private Integer correctOptionIndex;

    @Column(columnDefinition = "TEXT")
    private String explanation;

    @Column(name = "ai_tip", columnDefinition = "TEXT")
    private String aiTip;

    @Column(length = 50)
    private String difficulty; // Easy, Medium, Hard
}
