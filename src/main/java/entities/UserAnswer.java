package entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class UserAnswer {
    @Id
    @GeneratedValue
    private Long id;

    private String answerText;

    @ManyToOne
    private ResearchResult researchResult;

    @ManyToOne
    private Question question;

    @ManyToOne
    private Answer selectedAnswer; // optional, for multiple/single choice
}

