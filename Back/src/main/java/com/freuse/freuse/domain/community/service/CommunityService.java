package com.freuse.freuse.domain.community.service;

import com.freuse.freuse.domain.community.entity.Community;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface CommunityService {
    //글 작성
    Community createPost(String username, String title, String content, String category, String detailedCategory, String item, List<MultipartFile> files);

    //특정 글 조회
    Optional<Community> getPostById(Long postId);

    // 모든 글 조회
    List<Community> getAllPosts();

    //글 삭제
    void deletePost(Long postId);

    // 특정 사용자의 글 조회
    List<Community> getPostsByUsername(String username);

    //제목으로 검색
    List<Community> searchPostsByTitle(String keyword);

    // 글 수정
    Community updatePost(Long id, String username, String title, String content);

    //카테고리 별 조회
    List<Community> searchByCategory(String keyword);
}
