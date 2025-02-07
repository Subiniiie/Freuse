package com.freuse.freuse.domain.community.service;

import com.freuse.freuse.domain.community.entity.Community;
import com.freuse.freuse.domain.community.repository.CommunityRepository;
import com.freuse.freuse.domain.user.entity.User;
import com.freuse.freuse.domain.user.repository.UserRepository;
import org.hibernate.query.sqm.tree.domain.SqmTreatedRoot;
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
    public Community createPost( String username, String title, String content, String category, String detailedCategory, String item) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResolutionException("사용자를 찾을 수 없습니다. username : " + username));

        Community community = new Community();
        community.setUser(user);
        community.setTitle(title);
        community.setContent(content);
        community.setCategory(category);
        community.setDetailedCategory(detailedCategory);
        community.setItem(item);

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
    public List<Community> getPostsByUsername(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResolutionException("사용자를 찾을 수 없습니다. username : " + username));
        return communityRepository.findByUser(user);
    }

    @Override
    public List<Community> searchPostsByTitle(String keyword) {
        return communityRepository.findByTitleContaining(keyword);
    }


    public Community updatePost(Long id, String username, String title, String content) {
        Community community = communityRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시물이 존재하지 않습니다. ID : " + id));

        community.setTitle(title);
        community.setContent(content);

        return communityRepository.save(community);
    }
}
