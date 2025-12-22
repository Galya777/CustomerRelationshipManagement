package entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
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
