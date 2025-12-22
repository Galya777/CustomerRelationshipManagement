package entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "groups")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
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
    @Builder.Default
    private List<User> members = new java.util.ArrayList<>();
}

