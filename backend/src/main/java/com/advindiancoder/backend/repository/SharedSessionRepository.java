package com.advindiancoder.backend.repository;

import com.advindiancoder.backend.entity.SharedSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SharedSessionRepository extends JpaRepository<SharedSession, String> {
}
