package com.freuse.freuse.user;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.freuse.freuse.domain.user.dto.UserDto;
import com.freuse.freuse.domain.user.entity.User;
import com.freuse.freuse.domain.user.repository.UserRepository;
import com.freuse.freuse.domain.user.service.UserService;
import com.freuse.freuse.domain.user.service.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.ContentResultMatchers;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.mock.http.server.reactive.MockServerHttpRequest.post;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class SignupIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    UserServiceImpl userServiceImpl;

    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    void setUp() {
        userRepository.deleteAll();
    }

    @Test
    void signup() throws Exception {
        UserDto userDto = new UserDto();
        userDto.setUsername("testuser");
        userDto.setPassword("password123");
        userDto.setEmail("test@example.com");

        String requestBody = "{"
                + "\"username\":\"" + userDto.getUsername() + "\","
                + "\"password\":\"" + userDto.getPassword() + "\","
                + "\"email\":\"" + userDto.getEmail() + "\""
                + "}";

        mockMvc.perform(MockMvcRequestBuilders.post("/user/signup")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestBody)
                .with(csrf())
                .with(user("testuser").password("password123").roles("USER")))
            .andExpect(status().isCreated());
    }

    @Test
    void signupFailedByEmail() throws Exception {
        UserDto userDto1 = new UserDto();
        userDto1.setUsername("user1");
        userDto1.setPassword("password123");
        userDto1.setEmail("testEmail@example.com");

        userServiceImpl.registerUser(userDto1.getUsername(), userDto1.getPassword(), userDto1.getEmail());

        UserDto userDto2 = new UserDto();
        userDto2.setUsername("user2");
        userDto2.setPassword("password456");
        userDto2.setEmail("testEmail@example.com");

        mockMvc.perform(MockMvcRequestBuilders.post("/user/signup")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(userDto2))
                .with(csrf())
                .with(user("testuser").password("password123").roles("USER")))
            .andExpect(status().isBadRequest())
            .andExpect(content().string("이미 사용 중인 이메일 입니다."));
    }

    @Test
    void signupFailedByUsername() throws Exception {
        UserDto userDto1 = new UserDto();
        userDto1.setUsername("user3");
        userDto1.setPassword("password123");
        userDto1.setEmail("test1Email@example.com");

        userServiceImpl.registerUser(userDto1.getUsername(), userDto1.getPassword(), userDto1.getEmail());

        UserDto userDto2 = new UserDto();
        userDto2.setUsername("user3");
        userDto2.setPassword("password456");
        userDto2.setEmail("test2Email@example.com");

        mockMvc.perform(MockMvcRequestBuilders.post("/user/signup")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(userDto2))
                .with(csrf())
                .with(user("testuser").password("password123").roles("USER")))
            .andExpect(status().isBadRequest())
            .andExpect(content().string("이미 사용 중인 닉네임입니다."));
    }
}
