package com.example.customerrelationshipmanagement;

import entities.Role;
import entities.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import repositories.UserRepository;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDefaultUser(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            // Seed a testing account if it doesn't exist
            userRepository.findByEmail("test1").orElseGet(() -> {
                User u = new User();
                u.setEmail("test1"); // using email field as username for demo
                u.setFirstName("Test");
                u.setLastName("User");
                u.setRole(Role.CLIENT);
                u.setLeader(false);
                u.setPassword(passwordEncoder.encode("12345678"));
                return userRepository.save(u);
            });
        };
    }
}
