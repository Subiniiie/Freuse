package com.freuse.freuse.domain.community.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommunityResponseDto {

    private Long id;
    private String title;
    private String content;
    private String username;
    private String category;
    private String detailedCategory;
    private String item;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public CommunityResponseDto(Long id, String title, String content, String category, String detailedCategory, String item, String username, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.category = category;
        this.detailedCategory = detailedCategory;
        this.item = item;
        this.username = username;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}


