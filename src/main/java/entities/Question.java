package entities;

import jakarta.persistence.*;

import java.util.List;


@Entity
public class Question {
    @Id
    @GeneratedValue
    private Long id;

    private String content;

    @Enumerated(EnumType.STRING)
    private QuestionType type; // SINGLE_CHOICE, MULTIPLE_CHOICE, TEXT, etc.

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answers;

    @ManyToOne
    private Research research;
}

