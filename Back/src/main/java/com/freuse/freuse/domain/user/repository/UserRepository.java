package com.freuse.freuse.domain.user.repository;

import com.freuse.freuse.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
