package com.advindiancoder.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_course_progress")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserCourseProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(name = "course_id", nullable = false)
    private String courseId;

    @Column(name = "course_name", nullable = false)
    private String courseName;

    @Column(name = "progress_percent", nullable = false)
    private int progressPercent = 0;

    @Column(name = "completed_videos", length = 2000)
    private String completedVideos = ""; // Comma separated indices of completed lectures, e.g., "0,1,2"

    @Column(name = "assessment_score")
    private Integer assessmentScore = 0; // Average assessment score in percentage

    @Column(name = "completed_topics", length = 2000)
    private String completedTopics = "";

    @Column(name = "quiz_states", length = 65535)
    private String quizStates = "{}";

    @Column(name = "interview_requested")
    private Boolean interviewRequested = false;

    @Column(name = "last_updated")
    private LocalDateTime lastUpdated;

    @PrePersist
    @PreUpdate
    protected void onUpdate() {
        lastUpdated = LocalDateTime.now();
    }
}
