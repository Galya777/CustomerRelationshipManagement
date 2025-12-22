package repositories;

import entities.Research;
import entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResearchRepository extends JpaRepository<Research, Long> {
    List<Research> findByCreatedById(Long userId);
    List<Research> findByCreatedBy(User user);
    List<Research> findByNameContainingIgnoreCaseOrSubjectContainingIgnoreCase(String name, String subject);
}
