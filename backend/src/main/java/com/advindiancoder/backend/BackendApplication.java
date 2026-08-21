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

            try {
                jdbcTemplate.execute("CREATE TABLE IF NOT EXISTS reward_orders ("
                        + "id BIGINT AUTO_INCREMENT PRIMARY KEY, "
                        + "user_email VARCHAR(255) NOT NULL, "
                        + "item_id VARCHAR(100) NOT NULL, "
                        + "item_name VARCHAR(255) NOT NULL, "
                        + "item_category VARCHAR(100), "
                        + "coin_cost INT NOT NULL, "
                        + "full_name VARCHAR(255) NOT NULL, "
                        + "phone VARCHAR(50) NOT NULL, "
                        + "address_line VARCHAR(500) NOT NULL, "
                        + "city VARCHAR(100) NOT NULL, "
                        + "state VARCHAR(100) NOT NULL, "
                        + "pincode VARCHAR(20) NOT NULL, "
                        + "apparel_size VARCHAR(20), "
                        + "status VARCHAR(50) NOT NULL DEFAULT 'CONFIRMED', "
                        + "tracking_number VARCHAR(100), "
                        + "created_at DATETIME DEFAULT CURRENT_TIMESTAMP"
                        + ")");
                System.out.println("[Database Init] 'reward_orders' table is present and ready.");
            } catch (Exception e) {
                System.err.println("[Database Init] reward_orders check: " + e.getMessage());
            }
        };
    }
}
