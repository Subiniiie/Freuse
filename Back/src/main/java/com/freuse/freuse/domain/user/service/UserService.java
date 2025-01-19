package com.freuse.freuse.domain.user.service;

import com.freuse.freuse.domain.user.entity.User;

import java.util.Optional;

public interface UserService {
    User registerUser(String username, String password, String email);
    User getUserId(Long userId);

    Optional<User> authenticateUser(String email, String password);
}
