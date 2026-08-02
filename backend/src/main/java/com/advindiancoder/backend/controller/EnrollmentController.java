package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.dto.MessageResponse;
import com.advindiancoder.backend.dto.EnrollRequest;
import com.advindiancoder.backend.dto.ProgressUpdateRequest;
import com.advindiancoder.backend.entity.Enrollment;
import com.advindiancoder.backend.entity.UserCourseProgress;
import com.advindiancoder.backend.repository.EnrollmentRepository;
import com.advindiancoder.backend.repository.UserCourseProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/enrollments")
public class EnrollmentController {

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @Autowired
    private UserCourseProgressRepository userCourseProgressRepository;

    @PostMapping("/register")
    public ResponseEntity<?> registerEnrollment(@RequestBody Enrollment enrollment) {
        Enrollment saved = enrollmentRepository.save(enrollment);
        return ResponseEntity.ok(new MessageResponse("Enrollment successfully registered with ID " + saved.getId()));
    }

    @PostMapping("/enroll")
    public ResponseEntity<?> enrollInCourse(Principal principal, @RequestBody EnrollRequest enrollRequest) {
        if (principal == null) {
            return ResponseEntity.status(401).body(new MessageResponse("Unauthorized: Please sign in first!"));
        }

        String email = principal.getName();
        Optional<UserCourseProgress> existing = userCourseProgressRepository.findByEmailAndCourseId(email, enrollRequest.getCourseId());
        
        if (existing.isPresent()) {
            return ResponseEntity.ok(existing.get());
        }

        UserCourseProgress progress = new UserCourseProgress();
        progress.setEmail(email);
        progress.setCourseId(enrollRequest.getCourseId());
        progress.setCourseName(enrollRequest.getCourseName());
        progress.setProgressPercent(0);
        progress.setCompletedVideos("");
        progress.setAssessmentScore(0);

        UserCourseProgress saved = userCourseProgressRepository.save(progress);

        try {
            Enrollment enrollment = new Enrollment();
            enrollment.setEmail(email);
            enrollment.setName(enrollRequest.getCourseName());
            enrollment.setPhone("Free Course");
            enrollment.setTransactionId("FREE-" + System.currentTimeMillis());
            enrollment.setScreenshotPath("N/A");
            enrollmentRepository.save(enrollment);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok(saved);
    }

    @GetMapping("/progress")
    public ResponseEntity<?> getUserProgress(Principal principal) {
        if (principal == null) {
            return ResponseEntity.status(401).body(new MessageResponse("Unauthorized: Please sign in first!"));
        }
        
        String email = principal.getName();
        List<UserCourseProgress> list = userCourseProgressRepository.findByEmail(email);
        return ResponseEntity.ok(list);
    }

    @PostMapping("/update-progress")
    public ResponseEntity<?> updateProgress(Principal principal, @RequestBody ProgressUpdateRequest updateRequest) {
        if (principal == null) {
            return ResponseEntity.status(401).body(new MessageResponse("Unauthorized: Please sign in first!"));
        }

        String email = principal.getName();
        Optional<UserCourseProgress> progressOpt = userCourseProgressRepository.findByEmailAndCourseId(email, updateRequest.getCourseId());
        
        UserCourseProgress progress;
        if (progressOpt.isPresent()) {
            progress = progressOpt.get();
        } else {
            // Safe fallback: auto-enroll if progress record doesn't exist
            progress = new UserCourseProgress();
            progress.setEmail(email);
            progress.setCourseId(updateRequest.getCourseId());
            progress.setCourseName(updateRequest.getCourseId().replace("-", " "));
        }

        progress.setProgressPercent(updateRequest.getProgressPercent());
        progress.setCompletedVideos(updateRequest.getCompletedVideos());
        progress.setAssessmentScore(updateRequest.getAssessmentScore());
        if (updateRequest.getCompletedTopics() != null) {
            progress.setCompletedTopics(updateRequest.getCompletedTopics());
        }
        if (updateRequest.getQuizStates() != null) {
            progress.setQuizStates(updateRequest.getQuizStates());
        }
        if (updateRequest.getInterviewRequested() != null) {
            progress.setInterviewRequested(updateRequest.getInterviewRequested());
        }

        UserCourseProgress saved = userCourseProgressRepository.save(progress);
        return ResponseEntity.ok(saved);
    }
}
