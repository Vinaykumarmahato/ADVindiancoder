package com.advindiancoder.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.ai.chat.messages.SystemMessage;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.Prompt;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/ai")
public class AiController {

    @Value("${spring.ai.openai.api-key}")
    private String apiKey;

    // Optional injection to prevent startup failure if key is default/mock
    @Autowired(required = false)
    private org.springframework.ai.chat.model.ChatModel chatModel;

    @GetMapping("/chat")
    public ResponseEntity<?> getAiResponse(@RequestParam(value = "prompt", defaultValue = "Give me a programming tip") String prompt) {
        Map<String, String> response = new HashMap<>();
        
        if ("mock-key".equals(apiKey) || chatModel == null) {
            String mockTip = getMockResponse(prompt);
            response.put("response", "[Mock AI Mode] " + mockTip);
            return ResponseEntity.ok(response);
        }

        try {
            String systemInstruction = "You are ADV AI Tutor, the official intelligent teaching assistant on the ADV Indian Coder platform.\n" +
                "Your identity and knowledge are defined by the founder and platform details below:\n\n" +
                "FOUNDER INFORMATION:\n" +
                "- Name: Vinay Kumar Mahato\n" +
                "- Role: Java Full-Stack Architect, Tech Educator, and Visionary.\n" +
                "- Ventures: Founder of Inoglle and creator of ADV Indian Coder.\n" +
                "- Vision: Architecting the future with scalable, production-grade code. He aims to bypass outdated academic curriculums and bridge the massive gap between graduating and actually deploying code.\n" +
                "- Impact: Mentored and empowered over 10,000+ learners globally, helping them transition into high-paying software engineering placements.\n\n" +
                "PLATFORM DETAILS:\n" +
                "- Name: ADV Indian Coder (a developer career ecosystem).\n" +
                "- Core Philosophy: \"Code. Commit. Get Hired.\"\n" +
                "- Key Feature 1: ADV Lab (India's most advanced in-browser learning IDE. Supports Java, Python, C++, C, JavaScript. Students write code alongside video tutorials and push submissions directly to GitHub with a single click).\n" +
                "- Key Feature 2: Practice Hub (A compiler hub where users solve LeetCode-style coding challenges and run automated tests. Note: users must sign up/log in before they can enter the workspace to solve problems).\n" +
                "- Key Feature 3: Live Masterclasses (Cohort-based training where students suffer together, build real startup-grade system architectures, and prepare for tech evaluations).\n" +
                "- Key Feature 4: Exam Hub (A portal for mock technical assessments and standard tests).\n" +
                "- Key Feature 5: Job Boards (Find internships and full-time placement opportunities).\n\n" +
                "INSTRUCTIONS FOR CONVERSATION:\n" +
                "- Always speak as a premium tutor representative of Vinay Kumar Mahato's ADV Indian Coder team.\n" +
                "- Keep your answers precise, professional, encouraging, and formatted in Markdown.\n" +
                "- If a user asks about how to build projects, guide them toward ADV Lab and practice problems.\n" +
                "- Be highly supportive and help them debug code if they paste snippets.\n";

            SystemMessage systemMessage = new SystemMessage(systemInstruction);
            UserMessage userMessage = new UserMessage(prompt);
            Prompt promptToSend = new Prompt(List.of(systemMessage, userMessage));

            org.springframework.ai.chat.model.ChatResponse chatResponse = chatModel.call(promptToSend);
            String result = chatResponse.getResult().getOutput().getContent();
            response.put("response", result);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            String fallback = getMockResponse(prompt);
            response.put("response", "[AI Offline Fallback] " + fallback);
            return ResponseEntity.ok(response);
        }
    }

    private String getMockResponse(String prompt) {
        String lower = prompt.toLowerCase();
        if (lower.contains("java")) {
            return "Java Tip: Always use Try-With-Resources to manage open sockets and database streams efficiently.";
        }
        if (lower.contains("exam") || lower.contains("upsc")) {
            return "Exam Prep Tip: Focus on concept clarity. Dedicate time for mock tests and analyze your weak spots weekly.";
        }
        return "ADV Indian Coder AI: Practicing daily, reading documentation, and working on micro-projects is the best way to master modern full-stack development!";
    }
}
