package mapper;

import dto.ProductDto;
import entities.Product;
import entities.User;
import repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ProductMapper {

    private static UserRepository userRepository;

    @Autowired
    public ProductMapper(UserRepository userRepository) {
        ProductMapper.userRepository = userRepository;
    }

    public static ProductDto toDto(Product product) {
        if (product == null) return null;

        ProductDto dto = new ProductDto();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setDescription(product.getDescription());
        dto.setIncome(product.getIncome());
        dto.setTags(product.getTags());
        if (product.getBuyers() != null) {
            dto.setBuyerIds(product.getBuyers().stream()
                    .map(User::getId)
                    .collect(Collectors.toList()));
        }
        return dto;
    }

    public static Product toEntity(ProductDto dto) {
        if (dto == null) return null;

        Product product = new Product();
        product.setId(dto.getId());
        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setIncome(dto.getIncome());
        product.setTags(dto.getTags());
        if (dto.getBuyerIds() != null) {
            List<User> buyers = dto.getBuyerIds().stream()
                    .map(id -> userRepository.findById(id).orElse(null))
                    .filter(user -> user != null)
                    .collect(Collectors.toList());
            product.setBuyers(buyers);
        }
        return product;
    }
}