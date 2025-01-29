package com.freuse.freuse;

import com.freuse.freuse.config.SecurityConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@Import(SecurityConfig.class)
@EnableJpaAuditing
public class FreuseApplication {

	public static void main(String[] args) {
		SpringApplication.run(FreuseApplication.class, args);
	}

}
