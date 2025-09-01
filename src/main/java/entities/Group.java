package entities;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
public class Group {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String tokenKey;
    private LocalDate creationDate;

    @ManyToOne
    private User createdBy;

    @ManyToMany
    private List<User> members;
}

