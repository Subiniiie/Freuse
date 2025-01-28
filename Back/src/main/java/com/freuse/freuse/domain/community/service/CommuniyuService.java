package com.freuse.freuse.domain.community.service;

import com.freuse.freuse.domain.community.entity.Community;

import java.util.List;
import java.util.Optional;

public interface CommuniyuService {
    //글 작성
    Community createPost(Long userId, String title, String content);

    //특정 글 조회
    Optional<Community> getPostById(Long postId);

    // 모든 글 조회
    List<Community> getAllPosts();

    //글 삭제
    void deletePost(Long postId);

    // 특정 사용자의 글 조회
    List<Community> getPostsByUserId(Long userId);

    //제목으로 검색
    List<Community> searchPostsByTitle(String keyword);


}
