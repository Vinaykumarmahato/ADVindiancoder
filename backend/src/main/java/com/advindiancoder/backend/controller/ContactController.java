package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.model.Contact;
import com.advindiancoder.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    ContactRepository contactRepository;

    @PostMapping
    public ResponseEntity<?> submitContactForm(@RequestBody Contact contact) {
        contactRepository.save(contact);
        return ResponseEntity.ok("Message received successfully!");
    }
}
