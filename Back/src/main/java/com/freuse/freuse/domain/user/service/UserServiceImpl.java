package com.freuse.freuse.domain.user.service;


import com.freuse.freuse.domain.user.entity.User;
import com.freuse.freuse.domain.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User registerUser(String username, String password, String email) {
        User user = new User();

        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);



        return userRepository.save(user);
    }

    @Override
    public User getUserId(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }
}
