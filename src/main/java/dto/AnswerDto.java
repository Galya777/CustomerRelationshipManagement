package dto;


public class AnswerDto {
    private Long id;
    private String text;
    private int weight;

    public AnswerDto() { }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getText() { return text; }
    public void setText(String text) { this.text = text; }

    public int getWeight() { return weight; }
    public void setWeight(int weight) { this.weight = weight; }
}

