package com.advindiancoder.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner initDatabaseSchema(JdbcTemplate jdbcTemplate) {
        return args -> {
            try {
                // Ensure avatar_url column exists in users table safely across any MySQL version
                jdbcTemplate.execute("ALTER TABLE users ADD COLUMN avatar_url VARCHAR(500) NULL");
                System.out.println("[Database Init] Successfully added 'avatar_url' column to 'users' table.");
            } catch (Exception e) {
                // Column already exists or already updated
                System.out.println("[Database Init] 'avatar_url' column is present and ready.");
            }
        };
    }
}
