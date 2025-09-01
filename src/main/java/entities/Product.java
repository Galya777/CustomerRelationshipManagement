package entities;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
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
    private List<User> buyers;
}
