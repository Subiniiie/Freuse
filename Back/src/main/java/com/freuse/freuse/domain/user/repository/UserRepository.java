package com.freuse.freuse.domain.user.repository;

import com.freuse.freuse.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Transactional(readOnly = true)
    boolean existsByUsername(String username);

    @Transactional(readOnly = true)
    boolean existsByEmail(String email);
}
