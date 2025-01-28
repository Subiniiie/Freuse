package com.freuse.freuse.domain.community.repository;

import com.freuse.freuse.domain.community.entity.Community;
import com.freuse.freuse.domain.user.entity.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommunityRepository extends JpaRepository<Community, Long> {

    List<Community> findByTitleContaining(String keyword);

    List<Community> findByUser(User user);
}
