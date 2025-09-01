package dto;


public class UserAnswerDto {
    private Long id;
    private Long questionId;
    private Long selectedAnswerId; // optional
    private String answerText;

    public UserAnswerDto() { }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getQuestionId() { return questionId; }
    public void setQuestionId(Long questionId) { this.questionId = questionId; }

    public Long getSelectedAnswerId() { return selectedAnswerId; }
    public void setSelectedAnswerId(Long selectedAnswerId) { this.selectedAnswerId = selectedAnswerId; }

    public String getAnswerText() { return answerText; }
    public void setAnswerText(String answerText) { this.answerText = answerText; }
}

