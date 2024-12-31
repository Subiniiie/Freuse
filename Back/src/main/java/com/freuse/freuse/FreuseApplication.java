package com.freuse.freuse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class FreuseApplication {

	public static void main(String[] args) {
		SpringApplication.run(FreuseApplication.class, args);
	}

}
