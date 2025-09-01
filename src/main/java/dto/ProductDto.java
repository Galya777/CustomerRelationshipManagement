package dto;

import java.math.BigDecimal;
import java.util.List;

public class ProductDto {
    private Long id;
    private String name;
    private String description;
    private BigDecimal income;
    private List<String> tags;
    private List<Long> buyerIds;

    public ProductDto() { }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public BigDecimal getIncome() { return income; }
    public void setIncome(BigDecimal income) { this.income = income; }

    public List<String> getTags() { return tags; }
    public void setTags(List<String> tags) { this.tags = tags; }

    public List<Long> getBuyerIds() { return buyerIds; }
    public void setBuyerIds(List<Long> buyerIds) { this.buyerIds = buyerIds; }
}

