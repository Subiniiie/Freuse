package com.freuse.freuse.domain.community.repository;

import com.freuse.freuse.domain.community.entity.Community;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityRepository extends JpaRepository<Community, Long> {
}
