package dto;



import java.time.LocalDateTime;
import java.util.List;

public class ResearchResultDto {
    private Long id;
    private Long userId;
    private Long researchId;
    private LocalDateTime submittedAt;
    private List<UserAnswerDto> userAnswers;

    public ResearchResultDto() { }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public Long getResearchId() { return researchId; }
    public void setResearchId(Long researchId) { this.researchId = researchId; }

    public LocalDateTime getSubmittedAt() { return submittedAt; }
    public void setSubmittedAt(LocalDateTime submittedAt) { this.submittedAt = submittedAt; }

    public List<UserAnswerDto> getUserAnswers() { return userAnswers; }
    public void setUserAnswers(List<UserAnswerDto> userAnswers) { this.userAnswers = userAnswers; }
}

