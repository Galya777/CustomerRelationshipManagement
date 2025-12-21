package repositories;

import entities.UserAnswer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserAnswerRepository extends JpaRepository<UserAnswer, Long> {
    // Find all user answers for a specific research result
    List<UserAnswer> findByResearchResult_Id(Long researchResultId);
    
    // For backward compatibility (in case there are references to the misspelled version)
    default List<UserAnswer> findByReseachResultId(Long researchResultId) {
        return findByResearchResult_Id(researchResultId);
    }
}

