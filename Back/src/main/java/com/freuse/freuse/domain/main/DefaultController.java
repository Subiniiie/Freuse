package com.freuse.freuse.domain.main;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DefaultController {
    @GetMapping("/")
    public String home() {
        return "애플리케이션이 실행 중입니다.";
    }
}
