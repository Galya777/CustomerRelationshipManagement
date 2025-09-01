package dto;

import java.util.List;

public class QuestionDto {
    private Long id;
    private String content;
    private String type;
    private List<AnswerDto> answers;

    public QuestionDto() { }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public List<AnswerDto> getAnswers() { return answers; }
    public void setAnswers(List<AnswerDto> answers) { this.answers = answers; }
}

