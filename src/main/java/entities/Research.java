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

    @OneToMany(mappedBy = "reseach", cascade = CascadeType.ALL)
    private List<Question> questions;

    @ManyToOne
    private User createdBy;
}

