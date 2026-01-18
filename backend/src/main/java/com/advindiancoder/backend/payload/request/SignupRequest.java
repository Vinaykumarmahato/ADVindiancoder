package com.advindiancoder.backend.payload.request;

import lombok.Data;

@Data
public class SignupRequest {
    private String username;
    private String email;
    private String password;
    private String mobileNumber;
    private String linkedinUrl;
    private String role;
}
