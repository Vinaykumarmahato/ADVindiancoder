package com.advindiancoder.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SocialLoginRequest {
    private String provider; // 'google' | 'github' | 'linkedin'
    private String email;
    private String name;
    private String avatar;
}
