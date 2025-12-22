package entities;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String description;

    private BigDecimal income;

    @ElementCollection
    private List<String> tags;

    @ManyToMany
    @Builder.Default
    private List<User> buyers = new java.util.ArrayList<>();
}
