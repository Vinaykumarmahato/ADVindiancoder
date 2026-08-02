package com.advindiancoder.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "shared_sessions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SharedSession {

    @Id
    @Column(name = "session_id", nullable = false)
    private String sessionId;

    @Column(columnDefinition = "TEXT")
    private String code;

    @Column(nullable = false)
    private String language;

    @Column(name = "file_name", nullable = false)
    private String fileName;

    @Column(name = "updated_by")
    private String updatedBy;

    @Column(name = "last_updated", nullable = false)
    private long lastUpdated;
}
