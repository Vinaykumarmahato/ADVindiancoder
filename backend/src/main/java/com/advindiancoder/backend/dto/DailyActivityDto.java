package com.advindiancoder.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DailyActivityDto {
    private String day;
    private int percent;
    private int compiles;
    private int minutes;
}
