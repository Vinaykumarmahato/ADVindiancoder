package com.advindiancoder.backend.dto;

import lombok.Data;

@Data
public class EmailOtpVerifyRequest {
    private String email;
    private String otpCode;
}
