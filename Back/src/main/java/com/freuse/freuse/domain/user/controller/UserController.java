package com.freuse.freuse.domain.user.controller;


import com.freuse.freuse.domain.user.dto.UserDto;
import com.freuse.freuse.domain.user.dto.AuthResponseDto;
import com.freuse.freuse.domain.user.dto.UserResponseDto;
import com.freuse.freuse.domain.user.entity.User;
import com.freuse.freuse.domain.user.service.UserService;
import com.freuse.freuse.global.exception.UserAlreadyExistsException;
import com.freuse.freuse.global.provider.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Optional;
import java.util.UUID;

@RestController
public class UserController {
    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;

    public UserController(UserService userService, JwtTokenProvider jwtTokenProvider) {
        this.userService = userService;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @GetMapping("api/user/signup/{id}")
    public ResponseEntity<UserResponseDto> getUser(@PathVariable Long id) {
        User user = userService.getUserId(id);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        UserResponseDto userResponseDto = new UserResponseDto(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                "http://localhost:8080" + user.getProfileImageUrl()
        );

        return ResponseEntity.ok(userResponseDto);
    }




    @Value("${file.upload-dir}")
    private String uploadDir;

    @PostMapping("api/user/signup")
    public ResponseEntity<String> signup(
            @ModelAttribute UserDto userDto,
            @RequestParam(value = "file", required = false) MultipartFile file) {
        try {
            String imageUrl = null;
            if (file != null && !file.isEmpty()) {
                // 이미지 처리 로직
                String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
                Path uploadPath = Paths.get(uploadDir);
                if (!Files.exists(uploadPath)) {
                    Files.createDirectories(uploadPath);
                }
                Path filePath = uploadPath.resolve(fileName);
                Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
                imageUrl = "/images/" + fileName;
            }
            userService.registerUser(userDto.getUsername(), userDto.getPassword(), userDto.getEmail(), imageUrl);
            System.out.println("회원가입 성공");
            return ResponseEntity.status(HttpStatus.CREATED).body("회원가입 성공");
        } catch (UserAlreadyExistsException e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("이미지 업로드 실패");
        }
    }

    @PostMapping("api/user/login")
    public ResponseEntity<?> login(@RequestBody UserDto userDto) {
        Optional<User> userOptional = userService.authenticateUser(userDto.getEmail(), userDto.getPassword());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            String token = jwtTokenProvider.createToken(user.getUsername());
            AuthResponseDto authResponseDto = new AuthResponseDto(token, user.getId(), user.getUsername(), user.getEmail());
            System.out.println("로그인 성공: " + authResponseDto.toString());
            return ResponseEntity.ok(authResponseDto);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("이메일 또는 비밀번호가 잘못되었습니다.");
        }
    }
}
