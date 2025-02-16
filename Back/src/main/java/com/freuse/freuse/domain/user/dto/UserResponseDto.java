package com.freuse.freuse.domain.user.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto {
    private Long id;
    private String username;
    private String email;
    private String profileImageUrl;

    public UserResponseDto(Long id, String username, String email, String profileImageUrl) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.profileImageUrl = profileImageUrl;
    }
}