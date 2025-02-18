package com.freuse.freuse.domain.community.repository;

import com.freuse.freuse.domain.community.entity.Community;
import com.freuse.freuse.domain.community.entity.CommunityImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunityImageRepository extends JpaRepository<CommunityImage, Long> {
    List<CommunityImage> findByCommunity(Community community);
    void deleteByCommunity(Community community);
}
