package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.entity.SharedSession;
import com.advindiancoder.backend.repository.SharedSessionRepository;
import com.advindiancoder.backend.dto.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;
import java.util.Optional;

@RestController
@RequestMapping("/api/share")
@CrossOrigin(origins = "*", maxAge = 3600)
public class CollabController {

    @Autowired
    private SharedSessionRepository sessionRepository;

    public static class ShareCreateRequest {
        public String code;
        public String language;
        public String fileName;
        public String userName;
    }

    public static class ShareSyncRequest {
        public String code;
        public String language;
        public String fileName;
        public String userName;
        public long clientTimestamp;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createSession(@RequestBody ShareCreateRequest request) {
        String sessionId = UUID.randomUUID().toString().replace("-", "").substring(0, 12);
        
        SharedSession session = new SharedSession();
        session.setSessionId(sessionId);
        session.setCode(request.code != null ? request.code : "");
        session.setLanguage(request.language != null ? request.language : "java");
        session.setFileName(request.fileName != null ? request.fileName : "Main.java");
        session.setUpdatedBy(request.userName != null ? request.userName : "Anonymous");
        session.setLastUpdated(System.currentTimeMillis());

        sessionRepository.save(session);
        return ResponseEntity.ok(session);
    }

    @GetMapping("/{sessionId}")
    public ResponseEntity<?> getSession(@PathVariable String sessionId) {
        Optional<SharedSession> sessionOpt = sessionRepository.findById(sessionId);
        if (sessionOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(sessionOpt.get());
    }

    @PostMapping("/{sessionId}/sync")
    public ResponseEntity<?> syncSession(@PathVariable String sessionId, @RequestBody ShareSyncRequest request) {
        Optional<SharedSession> sessionOpt = sessionRepository.findById(sessionId);
        if (sessionOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Session not found"));
        }

        SharedSession savedSession = sessionOpt.get();

        // If client's timestamp is newer than the saved one, update the editor state in DB
        if (request.clientTimestamp > savedSession.getLastUpdated()) {
            savedSession.setCode(request.code != null ? request.code : "");
            savedSession.setLanguage(request.language != null ? request.language : "java");
            savedSession.setFileName(request.fileName != null ? request.fileName : "Main.java");
            savedSession.setUpdatedBy(request.userName != null ? request.userName : "Anonymous");
            savedSession.setLastUpdated(request.clientTimestamp);
            sessionRepository.save(savedSession);
        }

        return ResponseEntity.ok(savedSession);
    }
}
