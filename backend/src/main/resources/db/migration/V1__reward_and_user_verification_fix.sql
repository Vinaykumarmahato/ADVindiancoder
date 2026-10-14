-- =============================================================================
-- Migration: V1__reward_and_user_verification_fix.sql
-- Description: Schema enhancements, user_id linkage, coin transaction ledger,
--              contributors table, missing user recovery, and historical reconciliation.
-- =============================================================================

USE adv_full_stack_app;

DROP PROCEDURE IF EXISTS AddColumnIfNotExists;
DROP PROCEDURE IF EXISTS AddIndexIfNotExists;

DELIMITER //

CREATE PROCEDURE AddColumnIfNotExists(
    IN tblName VARCHAR(100),
    IN colName VARCHAR(100),
    IN colDef VARCHAR(255)
)
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = tblName AND COLUMN_NAME = colName
    ) THEN
        SET @sql = CONCAT('ALTER TABLE ', tblName, ' ADD COLUMN ', colName, ' ', colDef);
        PREPARE stmt FROM @sql;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;
    END IF;
END //

CREATE PROCEDURE AddIndexIfNotExists(
    IN tblName VARCHAR(100),
    IN idxName VARCHAR(100),
    IN colName VARCHAR(100)
)
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM INFORMATION_SCHEMA.STATISTICS
        WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = tblName AND INDEX_NAME = idxName
    ) THEN
        SET @sql = CONCAT('ALTER TABLE ', tblName, ' ADD INDEX ', idxName, ' (', colName, ')');
        PREPARE stmt FROM @sql;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;
    END IF;
END //

DELIMITER ;

-- 1. Add user_id column and indices to activity and submission tables
CALL AddColumnIfNotExists('practice_submissions', 'user_id', 'BIGINT NULL');
CALL AddIndexIfNotExists('practice_submissions', 'idx_ps_user_id', 'user_id');

CALL AddColumnIfNotExists('code_submissions', 'user_id', 'BIGINT NULL');
CALL AddIndexIfNotExists('code_submissions', 'idx_cs_user_id', 'user_id');

CALL AddColumnIfNotExists('reward_orders', 'user_id', 'BIGINT NULL');
CALL AddIndexIfNotExists('reward_orders', 'idx_ro_user_id', 'user_id');

CALL AddColumnIfNotExists('user_checkins', 'user_id', 'BIGINT NULL');
CALL AddIndexIfNotExists('user_checkins', 'idx_uc_user_id', 'user_id');

CALL AddColumnIfNotExists('user_activity_logs', 'user_id', 'BIGINT NULL');
CALL AddIndexIfNotExists('user_activity_logs', 'idx_ual_user_id', 'user_id');

CALL AddColumnIfNotExists('user_course_progress', 'user_id', 'BIGINT NULL');
CALL AddIndexIfNotExists('user_course_progress', 'idx_ucp_user_id', 'user_id');

CALL AddColumnIfNotExists('enrollments', 'user_id', 'BIGINT NULL');
CALL AddIndexIfNotExists('enrollments', 'idx_enr_user_id', 'user_id');

DROP PROCEDURE IF EXISTS AddColumnIfNotExists;
DROP PROCEDURE IF EXISTS AddIndexIfNotExists;

-- 2. Link existing records to users table by matching email
UPDATE practice_submissions ps JOIN users u ON LOWER(ps.email) = LOWER(u.email) SET ps.user_id = u.id WHERE ps.user_id IS NULL;
UPDATE code_submissions cs JOIN users u ON LOWER(cs.email) = LOWER(u.email) SET cs.user_id = u.id WHERE cs.user_id IS NULL;
UPDATE reward_orders ro JOIN users u ON LOWER(ro.user_email) = LOWER(u.email) SET ro.user_id = u.id WHERE ro.user_id IS NULL;
UPDATE user_checkins uc JOIN users u ON LOWER(uc.user_email) = LOWER(u.email) SET uc.user_id = u.id WHERE uc.user_id IS NULL;
UPDATE user_activity_logs ual JOIN users u ON LOWER(ual.email) = LOWER(u.email) SET ual.user_id = u.id WHERE ual.user_id IS NULL;
UPDATE user_course_progress ucp JOIN users u ON LOWER(ucp.email) = LOWER(u.email) SET ucp.user_id = u.id WHERE ucp.user_id IS NULL;
UPDATE enrollments e JOIN users u ON LOWER(e.email) = LOWER(u.email) SET e.user_id = u.id WHERE e.user_id IS NULL;

-- 3. Recover missing/unmigrated users from older development database (advindiancoder)
INSERT INTO adv_full_stack_app.users (
    email, username, password, role, mobile_number, linkedin_url,
    coding_hours, compile_success_rate, exam_mock_score, streak,
    successful_compiles, total_compiles, potd_solves, projects_json,
    social_links_json, education_json
)
SELECT 
    src.email, src.username, src.password, 'student', src.mobile_number, src.linkedin_url,
    0.0, 0.0, 0, 0,
    0, 0, 0, '[]',
    '{}', '{}'
FROM advindiancoder.users src
LEFT JOIN adv_full_stack_app.users dst ON LOWER(src.email) = LOWER(dst.email)
WHERE dst.id IS NULL;

-- 4. Create authoritative coin_transactions ledger table
CREATE TABLE IF NOT EXISTS coin_transactions (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    transaction_type VARCHAR(50) NOT NULL,
    amount INT NOT NULL,
    balance_after INT NOT NULL,
    reference_id VARCHAR(255) NULL,
    idempotency_key VARCHAR(255) UNIQUE NULL,
    description VARCHAR(500) NOT NULL,
    created_at DATETIME(6) NOT NULL,
    INDEX idx_coin_tx_user_id (user_id),
    INDEX idx_coin_tx_email (user_email),
    INDEX idx_coin_tx_type (transaction_type),
    INDEX idx_coin_tx_ref (reference_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Create contributors table for community recognition
CREATE TABLE IF NOT EXISTS contributors (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    display_name VARCHAR(255) NOT NULL,
    photo_url VARCHAR(500) NULL,
    social_url VARCHAR(500) NULL,
    contribution_title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    contribution_date DATE NOT NULL,
    category VARCHAR(50) NOT NULL DEFAULT 'BUG_BOUNTY',
    status VARCHAR(50) NOT NULL DEFAULT 'APPROVED',
    consent_given BIT(1) NOT NULL DEFAULT 1,
    created_at DATETIME(6) NOT NULL,
    INDEX idx_contributor_status (status),
    INDEX idx_contributor_category (category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Seed initial verified contributors
INSERT INTO contributors (display_name, photo_url, social_url, contribution_title, description, contribution_date, category, status, consent_given, created_at)
SELECT * FROM (
    SELECT 
        'Utkarsh Rajput' AS display_name,
        'https://api.dicebear.com/7.x/adventurer/svg?seed=Utkarsh' AS photo_url,
        'https://github.com/utkarshrajput' AS social_url,
        'Identified DSA Coin Reward Multiplier Issue' AS contribution_title,
        'Reported potential duplicate coin crediting for repeated problem submissions and helped audit the rewards ledger.' AS description,
        '2026-10-10' AS contribution_date,
        'BUG_BOUNTY' AS category,
        'APPROVED' AS status,
        1 AS consent_given,
        NOW() AS created_at
) AS tmp
WHERE NOT EXISTS (
    SELECT 1 FROM contributors WHERE display_name = 'Utkarsh Rajput' AND contribution_title = 'Identified DSA Coin Reward Multiplier Issue'
);

INSERT INTO contributors (display_name, photo_url, social_url, contribution_title, description, contribution_date, category, status, consent_given, created_at)
SELECT * FROM (
    SELECT 
        'Shahnaj Khatun' AS display_name,
        'https://api.dicebear.com/7.x/adventurer/svg?seed=Shahnaj' AS photo_url,
        'https://www.linkedin.com/in/shahnaj-khatun-56a1ab38b/' AS social_url,
        'DSA Edge Cases & Reverse String Verification' AS contribution_title,
        'Contributed algorithmic edge testcases for string reversal and two-pointer challenges in Practice Hub.' AS description,
        '2026-09-15' AS contribution_date,
        'COMMUNITY' AS category,
        'APPROVED' AS status,
        1 AS consent_given,
        NOW() AS created_at
) AS tmp
WHERE NOT EXISTS (
    SELECT 1 FROM contributors WHERE display_name = 'Shahnaj Khatun' AND contribution_title = 'DSA Edge Cases & Reverse String Verification'
);

INSERT INTO contributors (display_name, photo_url, social_url, contribution_title, description, contribution_date, category, status, consent_given, created_at)
SELECT * FROM (
    SELECT 
        'Rajani Kumari' AS display_name,
        'https://api.dicebear.com/7.x/adventurer/svg?seed=Rajani' AS photo_url,
        'https://github.com/rajanikumariray' AS social_url,
        'Swag Order Tracking and UI Bug Reports' AS contribution_title,
        'Flagged ambiguous order tracking identifiers and suggested adding dedicated verified tracking lookup.' AS description,
        '2026-08-25' AS contribution_date,
        'CODE_IMPROVEMENT' AS category,
        'APPROVED' AS status,
        1 AS consent_given,
        NOW() AS created_at
) AS tmp
WHERE NOT EXISTS (
    SELECT 1 FROM contributors WHERE display_name = 'Rajani Kumari' AND contribution_title = 'Swag Order Tracking and UI Bug Reports'
);

-- 7. Backfill auditable historical coin transactions (Preserving exact balances without clawback)
-- User 2 (vinay)
INSERT IGNORE INTO coin_transactions (user_id, user_email, transaction_type, amount, balance_after, reference_id, idempotency_key, description, created_at)
VALUES 
(2, 'vinaykumar860964@gmail.com', 'DAY1_BONUS', 50, 50, 'day-1-welcome', '2:DAY1_BONUS:day-1-welcome', 'Day 1 Pioneer Welcome Reward', '2026-06-28 09:41:30'),
(2, 'vinaykumar860964@gmail.com', 'DSA_PROBLEM_SOLVE', 2, 52, 'two-sum', '2:DSA_PROBLEM_SOLVE:two-sum', 'Solved DSA problem Two Sum (1st unique solve)', '2026-06-28 09:41:30'),
(2, 'vinaykumar860964@gmail.com', 'POTD_SOLVE', 10, 62, 'binary-search', '2:POTD_SOLVE:binary-search', 'Solved Problem of the Day: Binary Search', '2026-09-29 05:51:34'),
(2, 'vinaykumar860964@gmail.com', 'DSA_PROBLEM_SOLVE', 2, 64, 'best-time-to-buy-and-sell-stock', '2:DSA_PROBLEM_SOLVE:best-time-to-buy-and-sell-stock', 'Solved DSA problem Best Time to Buy and Sell Stock (1st unique solve)', '2026-09-29 06:55:04'),
(2, 'vinaykumar860964@gmail.com', 'STREAK_BONUS', 2, 66, 'streak-1', '2:STREAK_BONUS:streak-1', 'Daily coding streak bonus (Day 1)', '2026-09-29 06:55:04'),
(2, 'vinaykumar860964@gmail.com', 'LEGACY_CREDIT_PRESERVED', 2, 68, 'sub-13', '2:LEGACY_CREDIT_PRESERVED:sub-13', 'Legacy development duplicate submission credit preserved under non-clawback policy', '2026-06-28 09:41:36');

-- User 3 (phone_919931860964)
INSERT IGNORE INTO coin_transactions (user_id, user_email, transaction_type, amount, balance_after, reference_id, idempotency_key, description, created_at)
VALUES
(3, 'phone-919931860964@advcoder.com', 'DAY1_BONUS', 50, 50, 'day-1-welcome', '3:DAY1_BONUS:day-1-welcome', 'Day 1 Pioneer Welcome Reward', '2026-06-16 14:07:16'),
(3, 'phone-919931860964@advcoder.com', 'DSA_PROBLEM_SOLVE', 2, 52, 'binary-search', '3:DSA_PROBLEM_SOLVE:binary-search', 'Solved DSA problem Binary Search (1st unique solve)', '2026-06-16 14:07:16'),
(3, 'phone-919931860964@advcoder.com', 'DSA_PROBLEM_SOLVE', 2, 54, 'two-sum', '3:DSA_PROBLEM_SOLVE:two-sum', 'Solved DSA problem Two Sum (1st unique solve)', '2026-06-16 14:15:35'),
(3, 'phone-919931860964@advcoder.com', 'LEGACY_CREDIT_PRESERVED', 8, 62, 'legacy-compiles', '3:LEGACY_CREDIT_PRESERVED:legacy-compiles', 'Legacy development duplicate submission & IDE compile credits preserved under non-clawback policy', '2026-06-16 14:15:42');

-- User 6 (inogllecompany)
INSERT IGNORE INTO coin_transactions (user_id, user_email, transaction_type, amount, balance_after, reference_id, idempotency_key, description, created_at)
VALUES
(6, 'inogllecompany@gmail.com', 'DAY1_BONUS', 50, 50, 'day-1-welcome', '6:DAY1_BONUS:day-1-welcome', 'Day 1 Pioneer Welcome Reward', '2026-08-21 08:13:21'),
(6, 'inogllecompany@gmail.com', 'DSA_PROBLEM_SOLVE', 2, 52, 'two-sum', '6:DSA_PROBLEM_SOLVE:two-sum', 'Solved DSA problem Two Sum (1st unique solve)', '2026-08-21 08:13:21');

-- User 8 (vinu_756)
INSERT IGNORE INTO coin_transactions (user_id, user_email, transaction_type, amount, balance_after, reference_id, idempotency_key, description, created_at)
VALUES
(8, 'vinaytechnicaleh@gmail.com', 'DAY1_BONUS', 50, 50, 'day-1-welcome', '8:DAY1_BONUS:day-1-welcome', 'Day 1 Pioneer Welcome Reward', '2026-06-22 14:49:15'),
(8, 'vinaytechnicaleh@gmail.com', 'DSA_PROBLEM_SOLVE', 2, 52, 'reverse-string', '8:DSA_PROBLEM_SOLVE:reverse-string', 'Solved DSA problem Reverse String (1st unique solve)', '2026-06-22 14:49:15'),
(8, 'vinaytechnicaleh@gmail.com', 'DSA_PROBLEM_SOLVE', 2, 54, 'two-sum', '8:DSA_PROBLEM_SOLVE:two-sum', 'Solved DSA problem Two Sum (1st unique solve)', '2026-08-09 12:03:08'),
(8, 'vinaytechnicaleh@gmail.com', 'STREAK_BONUS', 2, 56, 'streak-1', '8:STREAK_BONUS:streak-1', 'Daily coding streak bonus (Day 1)', '2026-08-09 12:03:16'),
(8, 'vinaytechnicaleh@gmail.com', 'LEGACY_CREDIT_PRESERVED', 4, 60, 'legacy-repeats', '8:LEGACY_CREDIT_PRESERVED:legacy-repeats', 'Legacy development duplicate submission credits preserved under non-clawback policy', '2026-08-09 12:03:16');

-- User 11 (aapki_apni_didi)
INSERT IGNORE INTO coin_transactions (user_id, user_email, transaction_type, amount, balance_after, reference_id, idempotency_key, description, created_at)
VALUES
(11, 'aapkiapnididi.yt@gmail.com', 'DAY1_BONUS', 50, 50, 'day-1-welcome', '11:DAY1_BONUS:day-1-welcome', 'Day 1 Pioneer Welcome Reward', '2026-07-26 11:50:32'),
(11, 'aapkiapnididi.yt@gmail.com', 'DSA_PROBLEM_SOLVE', 2, 52, 'two-sum', '11:DSA_PROBLEM_SOLVE:two-sum', 'Solved DSA problem Two Sum (1st unique solve)', '2026-07-26 11:50:32'),
(11, 'aapkiapnididi.yt@gmail.com', 'DSA_PROBLEM_SOLVE', 2, 54, 'best-time-to-buy-and-sell-stock', '11:DSA_PROBLEM_SOLVE:best-time-to-buy-and-sell-stock', 'Solved DSA problem Best Time to Buy and Sell Stock (1st unique solve)', '2026-09-21 19:25:25'),
(11, 'aapkiapnididi.yt@gmail.com', 'STREAK_BONUS', 2, 56, 'streak-1', '11:STREAK_BONUS:streak-1', 'Daily coding streak bonus (Day 1)', '2026-09-21 19:25:25'),
(11, 'aapkiapnididi.yt@gmail.com', 'LEGACY_CREDIT_PRESERVED', 4, 60, 'legacy-sub-and-compile', '11:LEGACY_CREDIT_PRESERVED:legacy-sub-and-compile', 'Legacy development duplicate submission & IDE compile credits preserved under non-clawback policy', '2026-09-21 19:25:25');
