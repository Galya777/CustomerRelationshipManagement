package entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Answer {
    @Id
    @GeneratedValue
    private Long id;

    private String text;
    private int weight = 0;

    @ManyToOne
    private Question question;
}

