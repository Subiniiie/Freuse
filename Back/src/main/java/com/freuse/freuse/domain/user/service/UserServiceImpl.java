package com.freuse.freuse.domain.user.service;


import com.freuse.freuse.domain.user.entity.User;
import com.freuse.freuse.domain.user.repository.UserRepository;
import com.freuse.freuse.global.exception.UserAlreadyExistsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public User registerUser(String username, String password, String email, String profileImageUrl) {
        if (userRepository.existsByUsername(username)) {
            throw new UserAlreadyExistsException("이미 사용 중인 닉네임 입니다.");
        }
        if (userRepository.existsByEmail(email)) {
            throw new UserAlreadyExistsException("이미 사용 중인 이메일 입니다.");
        }
        User user = new User();

        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setEmail(email);
        user.setProfileImageUrl(profileImageUrl);

        return userRepository.save(user);
    }

    @Override
    public User getUserId(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    @Override
    public Optional<User> authenticateUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return Optional.of(user);
        }
        return Optional.empty();
    }
}
