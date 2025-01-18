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

    @GetMapping("api/user/signup/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = userService.getUserId(id);
        return ResponseEntity.ok(user);
    }

    @PostMapping("api/user/signup")
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

    @PostMapping("api/user/login")
    public ResponseEntity<String> login(@RequestBody UserDto userDto) {
        boolean isAuthenticated = userService.authenticateUser(userDto.getEmail(), userDto.getPassword());
        if (isAuthenticated) {
            return ResponseEntity.ok("로그인 성공");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("이메일 또는 비밀번호를 잘못 입력하셨습니다.");
        }
    }
}
