package com.freuse.freuse.domain.community.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommunityDto {

    private Long id;
    private String username;
    private String title;
    private String content;
    private String category;
    private String detailedCategory;
    private String item;

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
