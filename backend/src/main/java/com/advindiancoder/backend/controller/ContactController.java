package com.advindiancoder.backend.controller;

import com.advindiancoder.backend.dto.MessageResponse;
import com.advindiancoder.backend.entity.Contact;
import com.advindiancoder.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/submit")
    public ResponseEntity<?> submitMessage(@RequestBody Contact contact) {
        Contact savedContact = contactRepository.save(contact);
        return ResponseEntity.ok(new MessageResponse("Your message has been submitted successfully with ID " + savedContact.getId()));
    }
}
