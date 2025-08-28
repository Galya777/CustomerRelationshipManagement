package repositories;

import entities.Research;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReseachRepository extends JpaRepository<Research, Long> {
    List<Research> findByCreatedById(Long userId);
}
