package com.advindiancoder.backend.dto;

import lombok.Data;

@Data
public class ProfileUpdateRequest {
    private String username;
    private String avatarUrl;
    private String mobileNumber;
    private String linkedinUrl;
    private String socialLinksJson;
    private String educationJson;
    private String bio;
}
