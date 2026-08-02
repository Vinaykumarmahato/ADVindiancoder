package com.advindiancoder.backend.dto;

import lombok.Data;

@Data
public class ProgressUpdateRequest {
    private String courseId;
    private int progressPercent;
    private String completedVideos;
    private int assessmentScore;
    private String completedTopics;
    private String quizStates;
    private Boolean interviewRequested;
}
