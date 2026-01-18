package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.model.Enrollment;
import com.advindiancoder.backend.repository.EnrollmentRepository;
import com.advindiancoder.backend.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/enroll")
public class EnrollmentController {

    @Autowired
    EnrollmentRepository enrollmentRepository;

    @Autowired
    FileStorageService fileStorageService;

    @PostMapping
    public ResponseEntity<?> enrollUser(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam("transactionId") String transactionId,
            @RequestParam("screenshot") MultipartFile screenshot) {

        String fileName = fileStorageService.storeFile(screenshot);

        Enrollment enrollment = new Enrollment();
        enrollment.setName(name);
        enrollment.setEmail(email);
        enrollment.setPhone(phone);
        enrollment.setTransactionId(transactionId);
        enrollment.setScreenshotPath(fileName);

        enrollmentRepository.save(enrollment);

        return ResponseEntity.ok("Enrollment successful! We will verify your payment and contact you shortly.");
    }
}
