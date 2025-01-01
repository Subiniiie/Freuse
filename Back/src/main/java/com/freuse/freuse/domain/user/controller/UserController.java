package com.freuse.freuse.domain.user.controller;


import com.freuse.freuse.domain.user.dto.UserDto;
import com.freuse.freuse.domain.user.entity.User;
import com.freuse.freuse.domain.user.service.UserService;
import com.freuse.freuse.global.exception.UserAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user/signup/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = userService.getUserId(id);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/user/signup")
    public ResponseEntity<String> signup(@RequestBody UserDto userDto) {
        try {
            userService.registerUser(userDto.getUsername(), userDto.getPassword(), userDto.getEmail());
            System.out.println("회원가입 성공");
            return ResponseEntity.status(HttpStatus.CREATED).body("회원가입 성공");
        } catch (UserAlreadyExistsException e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
