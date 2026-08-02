package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.entity.CompetitiveExam;
import com.advindiancoder.backend.entity.ExamQuestion;
import com.advindiancoder.backend.repository.CompetitiveExamRepository;
import com.advindiancoder.backend.repository.ExamQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/exams")
@CrossOrigin(origins = "http://localhost:5173")
public class ExamController {

    @Autowired
    private CompetitiveExamRepository examRepository;

    @Autowired
    private ExamQuestionRepository questionRepository;

    @GetMapping
    public ResponseEntity<List<CompetitiveExam>> getAllExams() {
        List<CompetitiveExam> exams = examRepository.findAll();
        // Since questions are LAZY loaded, and we want to return them together or separately,
        // Actually, if we return exams, Jackson might trigger LazyInitializationException if not configured,
        // But since we are likely going to need questions, we can just let Jackson serialize them if we have an open session,
        // However, a better approach is to fetch questions explicitly or use EAGER fetching.
        // Let's iterate and size() them to force initialization.
        for (CompetitiveExam exam : exams) {
            exam.getQuestions().size();
        }
        return ResponseEntity.ok(exams);
    }

    @PostMapping("/bulk")
    public ResponseEntity<String> bulkInsertExams(@RequestBody List<CompetitiveExam> exams) {
        for (CompetitiveExam exam : exams) {
            // Setup bi-directional mapping
            if (exam.getQuestions() != null) {
                for (ExamQuestion q : exam.getQuestions()) {
                    q.setExam(exam);
                }
            }
        }
        examRepository.saveAll(exams);
        return ResponseEntity.ok("Successfully inserted " + exams.size() + " exams.");
    }

    @DeleteMapping("/bulk")
    public ResponseEntity<String> deleteAllExams() {
        examRepository.deleteAll();
        return ResponseEntity.ok("Successfully deleted all exams.");
    }
}
