package com.freuse.freuse.domain.community.controller;


import com.freuse.freuse.domain.community.dto.CommunityDto;
import com.freuse.freuse.domain.community.dto.CommunityRequest;
import com.freuse.freuse.domain.community.entity.Community;
import com.freuse.freuse.domain.community.service.CommunityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommunityController {

    private final CommunityService communityService;

    public CommunityController(CommunityService communityService) {
        this.communityService = communityService;
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
