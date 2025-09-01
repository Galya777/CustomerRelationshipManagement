package dto;

import java.time.LocalDate;
import java.util.List;

public class GroupDto {
    private Long id;
    private String name;
    private String tokenKey;
    private LocalDate creationDate;
    private Long createdByUserId;
    private List<Long> memberIds;

    public GroupDto() { }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getTokenKey() { return tokenKey; }
    public void setTokenKey(String tokenKey) { this.tokenKey = tokenKey; }

    public LocalDate getCreationDate() { return creationDate; }
    public void setCreationDate(LocalDate creationDate) { this.creationDate = creationDate; }

    public Long getCreatedByUserId() { return createdByUserId; }
    public void setCreatedByUserId(Long createdByUserId) { this.createdByUserId = createdByUserId; }

    public List<Long> getMemberIds() { return memberIds; }
    public void setMemberIds(List<Long> memberIds) { this.memberIds = memberIds; }
}

