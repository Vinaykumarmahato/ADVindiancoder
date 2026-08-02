package com.advindiancoder.backend.dto;

import com.advindiancoder.backend.entity.UserCourseProgress;
import com.advindiancoder.backend.entity.UserActivityLog;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashboardStatsResponse {
    private String username;
    private String email;
    private String mobileNumber;
    private String linkedinUrl;
    private String socialLinksJson;
    private String educationJson;
    private String role;
    private String avatar;
    private String bio;
    private List<String> enrolledCourses;
    private int codingHours;
    private int totalCompiles;
    private double compileSuccessRate;
    private int examMockScore;
    private int streak;
    private List<UserCourseProgress> courseProgressList;
    private int successfulCompiles;
    private int failedCompiles;
    private List<FileStatsResponse> fileStats;
    private List<UserActivityLog> recentActivities;
    private List<DailyActivityDto> weeklyActivity;
}
