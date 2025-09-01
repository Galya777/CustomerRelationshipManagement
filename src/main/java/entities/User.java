package entities;

import jakarta.persistence.*;



import java.time.LocalDate;
import java.util.List;


@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;

    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private String country;
    private LocalDate birthDate;

    @Enumerated(EnumType.STRING)
    private Role role; // ANONYMOUS, CLIENT, LEADER, ADMIN

    private boolean isLeader; // used at registration

    @ManyToMany(mappedBy = "members")
    private List<Group> groups;

    @OneToMany(mappedBy = "createdBy")
    private List<Research> createdReseach;

    @OneToMany(mappedBy = "user")
    private List<ResearchResult> reseachResults;

    // --- Getters and Setters ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public LocalDate getBirthDate() { return birthDate; }
    public void setBirthDate(LocalDate birthDate) { this.birthDate = birthDate; }

    public Role getRole() { return role; }
    public void setRole(Role role) { this.role = role; }

    public boolean isLeader() { return isLeader; }
    public void setLeader(boolean leader) { isLeader = leader; }

    public List<Group> getGroups() { return groups; }
    public void setGroups(List<Group> groups) { this.groups = groups; }

    public List<Research> getCreatedReseach() { return createdReseach; }
    public void setCreatedReseach(List<Research> createdReseach) { this.createdReseach = createdReseach; }

    public List<ResearchResult> getReseachResults() { return reseachResults; }
    public void setReseachResults(List<ResearchResult> reseachResults) { this.reseachResults = reseachResults; }
}


