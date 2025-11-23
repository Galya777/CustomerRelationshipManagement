package repositories;

import entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import entities.Role;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByRole(Role role);
    List<User> findByFirstNameContainingIgnoreCase(String name);
}

