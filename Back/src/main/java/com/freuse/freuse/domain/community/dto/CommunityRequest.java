package com.freuse.freuse.domain.community.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommunityRequest {

    private String username;
    private String title;
    private String content;
    private String category;
    private String detailedCategory;
    private String item;
}
