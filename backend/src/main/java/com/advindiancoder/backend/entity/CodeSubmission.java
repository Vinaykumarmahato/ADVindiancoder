package com.advindiancoder.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "code_submissions", indexes = {
    @Index(name = "idx_code_sub_email", columnList = "email")
})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CodeSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(name = "file_name", nullable = false)
    private String fileName;

    @Column(nullable = false)
    private String language;

    @Column(nullable = false)
    private boolean success;

    @Column(columnDefinition = "TEXT")
    private String code;

    @Column(nullable = false)
    private LocalDateTime timestamp;

    @PrePersist
    protected void onCreate() {
        timestamp = LocalDateTime.now();
    }
}
