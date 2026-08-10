package com.advindiancoder.backend.config;

import com.advindiancoder.backend.entity.PracticeProblem;
import com.advindiancoder.backend.repository.PracticeProblemRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;

@Component
public class PracticeHubSeeder implements CommandLineRunner {

    @Autowired
    private PracticeProblemRepository problemRepository;

    @Override
    public void run(String... args) {
        try {
            if (problemRepository.count() < 355) {
                System.out.println("[PracticeHubSeeder] Clearing old problems and seeding new challenges...");
                problemRepository.deleteAll();
                seedProblems();
            } else {
                System.out.println("[PracticeHubSeeder] Practice Hub already has " + problemRepository.count() + " problems. Seeding skipped.");
            }
        } catch (Exception e) {
            System.err.println("[PracticeHubSeeder] Unable to run seeder (database may be unreachable): " + e.getMessage());
        }
    }

    private void seedProblems() {
        ObjectMapper mapper = new ObjectMapper();
        try (InputStream is = getClass().getResourceAsStream("/practice_problems_seed.json")) {
            if (is == null) {
                System.err.println("[PracticeHubSeeder] ERROR: Could not find '/practice_problems_seed.json' in classpath resources.");
                return;
            }
            List<PracticeProblem> problems = mapper.readValue(is, new TypeReference<List<PracticeProblem>>() {});
            problemRepository.saveAll(problems);
            System.out.println("[PracticeHubSeeder] Successfully seeded " + problems.size() + " coding problems into the database.");
        } catch (Exception e) {
            System.err.println("[PracticeHubSeeder] Failed to seed practice problems: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
