package repositories;

import entities.ResearchResult;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReseachResultRepository extends JpaRepository<ResearchResult, Long> {
    List<ResearchResult> findByUserId(Long userId);
    List<ResearchResult> findByReseachId(Long reseachId);
}

