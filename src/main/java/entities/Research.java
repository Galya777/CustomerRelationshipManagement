package entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Research {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String subject;
    private String description;

    @ElementCollection
    private List<String> tags;

    @OneToMany(mappedBy = "research", cascade = CascadeType.ALL)
    private List<Question> questions;

    @ManyToOne
    private User createdBy;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public List<String> getTags() { return tags; }
    public void setTags(List<String> tags) { this.tags = tags; }
    public List<Question> getQuestions() { return questions; }
    public void setQuestions(List<Question> questions) { this.questions = questions; }
    public User getCreatedBy() { return createdBy; }
    public void setCreatedBy(User createdBy) { this.createdBy = createdBy; }
}

