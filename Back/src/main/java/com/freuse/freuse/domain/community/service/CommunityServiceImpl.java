package com.freuse.freuse.domain.community.service;

import com.freuse.freuse.domain.community.entity.Community;
import com.freuse.freuse.domain.community.repository.CommunityRepository;
import com.freuse.freuse.domain.user.entity.User;
import com.freuse.freuse.domain.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.lang.module.ResolutionException;
import java.util.List;
import java.util.Optional;

@Service
public class CommunityServiceImpl implements CommunityService {

    private final CommunityRepository communityRepository;
    private final UserRepository userRepository;

    public CommunityServiceImpl(CommunityRepository communityRepository, UserRepository userRepository) {
        this.communityRepository = communityRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Community createPost(Long userId, String title, String content) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResolutionException("사용자를 찾을 수 없습니다. ID : " + userId));

        Community community = new Community();
        community.setUser(user);
        community.setTitle(title);
        community.setContent(content);

        System.out.println("게시물 저장?" + title + content + user);

        return communityRepository.save(community);
    }

    @Override
    public Optional<Community> getPostById(Long postId) {
        return communityRepository.findById(postId);
    }

    @Override
    public List<Community> getAllPosts() {
        return communityRepository.findAll();
    }

    @Override
    public void deletePost(Long postId) {
        if (!communityRepository.existsById(postId)) {
            throw new ResolutionException("게시글을 찾을 수 없습니다. ID : " + postId);
        }
    }

    @Override
    public List<Community> getPostsByUserId(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResolutionException("사용자를 찾을 수 없습니다. ID : " + userId));
        return communityRepository.findByUser(user);
    }

    @Override
    public List<Community> searchPostsByTitle(String keyword) {
        return communityRepository.findByTitleContaining(keyword);
    }
}
