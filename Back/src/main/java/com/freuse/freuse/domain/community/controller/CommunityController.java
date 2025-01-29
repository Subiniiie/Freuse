package com.freuse.freuse.domain.community.controller;


import com.freuse.freuse.domain.community.dto.CommunityDto;
import com.freuse.freuse.domain.community.dto.CommunityRequest;
import com.freuse.freuse.domain.community.dto.CommunityResponseDto;
import com.freuse.freuse.domain.community.entity.Community;
import com.freuse.freuse.domain.community.repository.CommunityRepository;
import com.freuse.freuse.domain.community.service.CommunityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class CommunityController {

    private final CommunityService communityService;
    private final CommunityRepository communityRepository;

    public CommunityController(CommunityService communityService, CommunityRepository communityRepository) {
        this.communityService = communityService;
        this.communityRepository = communityRepository;
    }

    @GetMapping("/api/community")
    public List<CommunityResponseDto> getAllArticles() {
        List<Community> communities = communityRepository.findAllByOrderByCreatedAtDesc();

        return communities.stream()
                .map(community -> new CommunityResponseDto(
                        community.getId(),
                        community.getTitle(),
                        community.getContent(),
                        community.getUsername(),
                        community.getCreatedAt(),
                        community.getUpdatedAt()))
                .collect(Collectors.toList());
    }

    @PostMapping("/api/community/create")
    public ResponseEntity<CommunityDto> createPost(@RequestBody CommunityRequest request) {
        Community community = communityService.createPost(request.getUsername(), request.getTitle(), request.getContent());

        CommunityDto communityDto = new CommunityDto();
        communityDto.setUsername(community.getUsername());
        communityDto.setTitle(community.getTitle());
        communityDto.setContent(community.getContent());

        return ResponseEntity.ok(communityDto);
    }
}
