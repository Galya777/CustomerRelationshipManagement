package repositories;

import entities.ResearchResult;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResearchResultRepository extends JpaRepository<ResearchResult, Long> {
    List<ResearchResult> findByUser_Id(Long userId);
    List<ResearchResult> findByResearch_Id(Long researchId);
}

