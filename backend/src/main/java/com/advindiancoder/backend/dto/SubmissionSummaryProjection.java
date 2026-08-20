package com.advindiancoder.backend.dto;

import java.time.LocalDateTime;

public interface SubmissionSummaryProjection {
    LocalDateTime getTimestamp();
    boolean isSuccess();
}
