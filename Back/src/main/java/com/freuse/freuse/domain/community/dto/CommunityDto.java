package com.freuse.freuse.domain.community.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommunityDto {

    private String username;
    private String title;
    private String content;

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
