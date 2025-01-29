package com.freuse.freuse.domain.user.controller;


import com.freuse.freuse.domain.user.dto.UserDto;
import com.freuse.freuse.domain.user.dto.AuthResponseDto;
import com.freuse.freuse.domain.user.entity.User;
import com.freuse.freuse.domain.user.service.UserService;
import com.freuse.freuse.global.exception.UserAlreadyExistsException;
import com.freuse.freuse.global.provider.JwtTokenProvider;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {
    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;

    public UserController(UserService userService, JwtTokenProvider jwtTokenProvider) {
        this.userService = userService;
        this.jwtTokenProvider = jwtTokenProvider;
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
    public ResponseEntity<?> login(@RequestBody UserDto userDto) {
        Optional<User> userOptional = userService.authenticateUser(userDto.getEmail(), userDto.getPassword());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            String token = jwtTokenProvider.createToken(user.getUsername());
            AuthResponseDto authResponseDto = new AuthResponseDto(token, user.getUsername(), user.getEmail());
            return ResponseEntity.ok(authResponseDto);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("이메일 또는 비밀번호가 잘못되었습니다.");
        }
    }
}
