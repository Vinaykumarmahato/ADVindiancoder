package com.advindiancoder.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "practice_problems")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PracticeProblem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String slug;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private String difficulty; // EASY, MEDIUM, HARD, EXPERT

    @Column(nullable = false)
    private String topic; // Arrays, Strings, Dynamic Programming, etc.

    @Column(nullable = false)
    private String category; // Coding Foundations, Interview Mastery Path, etc.

    @Column(nullable = false, columnDefinition = "TEXT")
    private String boilerplateCode; // JSON map of language -> boilerplate template

    @Column(nullable = false, columnDefinition = "TEXT")
    private String testCases; // JSON list of tests: [{input: "...", output: "..."}]
}
