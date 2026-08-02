package com.advindiancoder.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FileStatsResponse {
    private String fileName;
    private String language;
    private int totalRuns;
    private int correctRuns;
    private int incorrectRuns;
}
