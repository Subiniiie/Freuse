package com.freuse.freuse.domain.community.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommunityDto {

    private Long userId;
    private String title;
    private String content;
}
