package com.freuse.freuse.domain.community.repository;

import com.freuse.freuse.domain.community.entity.Community;
import com.freuse.freuse.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommunityRepository extends JpaRepository<Community, Long> {

    List<Community> findAllByOrderByCreatedAtDesc();
    List<Community> findByTitleContaining(String keyword);
    List<Community> findByUser(User user);
    @Query("SELECT c FROM Community c WHERE c.category LIKE %:keyword%")
    List<Community> findByCategoryContaining(@Param("keyword") String keyword);
}
