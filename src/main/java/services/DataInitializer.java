package services;

import entities.Role;
import entities.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import repositories.UserRepository;

import java.time.LocalDate;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDefaultUsers(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            // Admin user
            if (userRepository.findByEmail("admin@example.com").isEmpty()) {
                User admin = new User();
                admin.setEmail("admin@example.com");
                admin.setFirstName("Admin");
                admin.setLastName("User");
                admin.setRole(Role.ADMIN);
                admin.setLeader(true);
                admin.setPassword(passwordEncoder.encode("admin123"));
                admin.setCountry("USA");
                admin.setBirthDate(LocalDate.of(1980, 1, 1));
                userRepository.save(admin);
            }

            // Test client user
            if (userRepository.findByEmail("client@example.com").isEmpty()) {
                User client = new User();
                client.setEmail("client@example.com");
                client.setFirstName("John");
                client.setLastName("Doe");
                client.setRole(Role.CLIENT);
                client.setLeader(false);
                client.setPassword(passwordEncoder.encode("client123"));
                client.setCountry("Canada");
                client.setBirthDate(LocalDate.of(1990, 5, 15));
                userRepository.save(client);
            }

            // Test leader user
            if (userRepository.findByEmail("leader@example.com").isEmpty()) {
                User leader = new User();
                leader.setEmail("leader@example.com");
                leader.setFirstName("Jane");
                leader.setLastName("Smith");
                leader.setRole(Role.LEADER);
                leader.setLeader(true);
                leader.setPassword(passwordEncoder.encode("leader123"));
                leader.setCountry("UK");
                leader.setBirthDate(LocalDate.of(1985, 10, 20));
                userRepository.save(leader);
            }

            // Test user for README documentation
            if (userRepository.findByEmail("test1").isEmpty()) {
                User testUser = new User();
                testUser.setEmail("test1");
                testUser.setFirstName("Test");
                testUser.setLastName("User");
                testUser.setRole(Role.CLIENT);
                testUser.setLeader(false);
                testUser.setPassword(passwordEncoder.encode("12345678"));
                testUser.setCountry("Test Country");
                testUser.setBirthDate(LocalDate.of(1995, 1, 1));
                userRepository.save(testUser);
            }
        };
    }
}
