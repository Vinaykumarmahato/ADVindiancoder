package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.UserActivityLog;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserActivityLogRepository extends JpaRepository<UserActivityLog, Long> {
    List<UserActivityLog> findByEmailOrderByTimestampDesc(String email);
    List<UserActivityLog> findTop15ByEmailOrderByTimestampDesc(String email);
}
