package com.freuse.freuse.domain.user.service;

import com.freuse.freuse.domain.user.entity.User;

public interface UserService {
    User registerUser(String username, String password, String email);

    User getUserId(Long userId);
}
