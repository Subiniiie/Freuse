package com.freuse.freuse.domain.community.controller;


import com.freuse.freuse.domain.community.dto.CommunityDto;
import com.freuse.freuse.domain.community.dto.CommunityRequest;
import com.freuse.freuse.domain.community.dto.CommunityResponseDto;
import com.freuse.freuse.domain.community.entity.Community;
import com.freuse.freuse.domain.community.repository.CommunityRepository;
import com.freuse.freuse.domain.community.service.CommunityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Base64;

@RestController
public class CommunityController {

    private final CommunityService communityService;
    private final CommunityRepository communityRepository;

    private List<String> getBase64Images(Community community) {
        return community.getImages().stream()
                .map(image -> Base64.getEncoder().encodeToString(image.getImageData()))
                .collect(Collectors.toList());
    }

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
                        community.getCategory(),
                        community.getDetailedCategory(),
                        community.getItem(),
                        getBase64Images(community),
                        community.getCreatedAt(),
                        community.getUpdatedAt()))
                .collect(Collectors.toList());
    }

    @GetMapping("/api/community/{id}")
    public ResponseEntity<CommunityResponseDto> getArticle(@PathVariable Long id) {
        Community community = communityRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다. id :" + id));

        CommunityResponseDto communityResponseDto = new CommunityResponseDto(
                community.getId(),
                community.getTitle(),
                community.getContent(),
                community.getUsername(),
                community.getCategory(),
                community.getDetailedCategory(),
                community.getItem(),
                getBase64Images(community),
                community.getCreatedAt(),
                community.getUpdatedAt()
        );

        return ResponseEntity.ok(communityResponseDto);
    }

    @PostMapping("/api/community/create")
    public ResponseEntity<CommunityDto> createPost(
            @ModelAttribute CommunityRequest request,
            @RequestParam(value = "files", required = false) List<MultipartFile> files) {
        try {
            Community community = communityService.createPost(
                    request.getUsername(),
                    request.getTitle(),
                    request.getContent(),
                    request.getCategory(),
                    request.getDetailedCategory(),
                    request.getItem(),
                    files
            );

            CommunityDto communityDto = new CommunityDto();
            communityDto.setId(community.getId());
            communityDto.setUsername(community.getUsername());
            communityDto.setTitle(community.getTitle());
            communityDto.setContent(community.getContent());
            communityDto.setCategory(community.getCategory());
            communityDto.setDetailedCategory(community.getDetailedCategory());
            communityDto.setItem(community.getItem());

            return ResponseEntity.status(HttpStatus.CREATED).body(communityDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/api/community/{id}")
    public ResponseEntity<CommunityResponseDto> updatePost(
            @PathVariable Long id,
            @RequestBody CommunityRequest request) {

        Community updatedCommunity = communityService.updatePost(id, request.getUsername(), request.getTitle(), request.getContent());

        CommunityResponseDto responseDto = new CommunityResponseDto(
                updatedCommunity.getId(),
                updatedCommunity.getTitle(),
                updatedCommunity.getContent(),
                updatedCommunity.getUsername(),
                updatedCommunity.getCategory(),
                updatedCommunity.getDetailedCategory(),
                updatedCommunity.getItem(),
                getBase64Images(updatedCommunity),
                updatedCommunity.getCreatedAt(),
                updatedCommunity.getUpdatedAt()
        );

        return ResponseEntity.ok(responseDto);
    }

    @DeleteMapping("/api/community/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {

        Community community = communityRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시물이 존재하지 않습니다."));

        communityRepository.delete(community);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/api/community/category")
    public List<Community> searchByCategory(@RequestParam String keyword) {
        return communityService.searchByCategory(keyword);
    }
}
