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
            System.out.println("Initializing default users...");
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
                System.out.println("Admin user created");
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
                System.out.println("Client user created");
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
                System.out.println("Leader user created");
            }

            // Test user for README documentation
            userRepository.findByEmail("test1").ifPresentOrElse(existing -> {
                // Ensure password matches README (upgrade if needed)
                existing.setPassword(passwordEncoder.encode("123456789"));
                if (existing.getFirstName() == null) existing.setFirstName("Test");
                if (existing.getLastName() == null) existing.setLastName("User");
                if (existing.getRole() == null) existing.setRole(Role.CLIENT);
                existing.setLeader(existing.isLeader());
                if (existing.getCountry() == null) existing.setCountry("Test Country");
                if (existing.getBirthDate() == null) existing.setBirthDate(LocalDate.of(1995, 1, 1));
                userRepository.save(existing);
                System.out.println("Test user updated");
            }, () -> {
                User testUser = new User();
                testUser.setEmail("test1");
                testUser.setFirstName("Test");
                testUser.setLastName("User");
                testUser.setRole(Role.CLIENT);
                testUser.setLeader(false);
                // Align with README credentials: username: test1, password: 123456789
                testUser.setPassword(passwordEncoder.encode("123456789"));
                testUser.setCountry("Test Country");
                testUser.setBirthDate(LocalDate.of(1995, 1, 1));
                userRepository.save(testUser);
                System.out.println("Test user created");
            });
            System.out.println("User initialization complete");
        };
    }
}
