package entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
public class ResearchResult {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Research research;

    private LocalDateTime submittedAt;

    @OneToMany(mappedBy = "researchResult", cascade = CascadeType.ALL)
    private List<UserAnswer> userAnswers;
}
