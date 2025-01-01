package com.freuse.freuse.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.freuse.freuse.domain.user.controller.UserController;
import com.freuse.freuse.domain.user.dto.UserDto;
import com.freuse.freuse.domain.user.entity.User;
import com.freuse.freuse.domain.user.service.UserService;
import com.freuse.freuse.global.exception.UserAlreadyExistsException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.RequestPostProcessor;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.web.servlet.function.RequestPredicates.contentType;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

@SpringBootTest
@AutoConfigureMockMvc
public class SignupControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Mock
    private UserService userService;

    @Autowired
    private UserController userController;

    @BeforeEach
    void setUp() {
        Mockito.reset(userService);
    }

    @Test
    @DisplayName("회원가입 성공 테스트")
    void signupSuccess() throws Exception {
        UserDto userDto = new UserDto();
        userDto.setUsername("testuser");
        userDto.setPassword("password123");
        userDto.setEmail("test@example.com");

        Mockito.when(userService.registerUser(any(), any(), any())).thenReturn(new User());

        mockMvc.perform(post("/user/signup")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(objectMapper.writeValueAsString(userDto))
                        .with(csrf())
                        .with(user("testuser").password("password123").roles("USER")))
                .andExpect(status().isOk())
                .andExpect(content().string("회원가입 성공"));
    }


    @Test
    @DisplayName("회원가입 실패 테스트 - 중복된 이메일")
    void signupFailDuplicateEmail() throws Exception {
        UserDto userDto1 = new UserDto();
        userDto1.setUsername("testuser1");
        userDto1.setPassword("password123");
        userDto1.setEmail("duplicate@example.com");

        Mockito.when(userService.registerUser(eq("testuser"), eq("password123"), eq("duplicate@eaxmple.com")))
                        .thenReturn(new User());

        mockMvc.perform(post("/user/signup")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(userDto1))
                .with(csrf())
                .with(user("testuser1").password("password123").roles("USER")))
            .andExpect(status().isOk())
            .andExpect(content().string("회원가입 성공"));

        UserDto userDto2 = new UserDto();
        userDto2.setUsername("testuser2");
        userDto2.setPassword("password456");
        userDto2.setEmail("duplicate@example.com");

        Mockito.doThrow(new UserAlreadyExistsException("이미 사용 중인 이메일 입니다."))
                .when(userService)
                .registerUser(eq("testuser2"), eq("password456"), eq("duplicate@example.com"));

        mockMvc.perform(post("/user/signup")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(userDto2))
                .with(csrf())
                .with(user("testuser2").password("password456").roles("USER")))
            .andExpect(status().isBadRequest())
            .andExpect(content().string("이미 사용 중인 이메일 입니다."));
    }
}
