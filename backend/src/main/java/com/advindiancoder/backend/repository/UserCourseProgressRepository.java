package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.UserCourseProgress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserCourseProgressRepository extends JpaRepository<UserCourseProgress, Long> {
    List<UserCourseProgress> findByEmail(String email);
    Optional<UserCourseProgress> findByEmailAndCourseId(String email, String courseId);
}
