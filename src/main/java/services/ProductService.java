package services;

import dto.ProductDto;
import entities.Product;
import entities.User;
import mapper.ProductMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repositories.ProductRepository;
import repositories.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    public ProductService(ProductRepository productRepository, UserRepository userRepository) {
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    // Get all products
    public List<ProductDto> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(ProductMapper::toDto)
                .collect(Collectors.toList());
    }

    // Get product by ID
    public Optional<ProductDto> getProductById(Long id) {
        return productRepository.findById(id)
                .map(ProductMapper::toDto);
    }

    // Create new product
    @Transactional
    public ProductDto createProduct(ProductDto productDto) {
        Product product = ProductMapper.toEntity(productDto);
        product = productRepository.save(product);
        return ProductMapper.toDto(product);
    }

    // Update product
    @Transactional
    public Optional<ProductDto> updateProduct(Long id, ProductDto productDto) {
        return productRepository.findById(id).map(product -> {
            if (productDto.getName() != null) product.setName(productDto.getName());
            if (productDto.getDescription() != null) product.setDescription(productDto.getDescription());
            if (productDto.getIncome() != null) product.setIncome(productDto.getIncome());
            if (productDto.getTags() != null) product.setTags(productDto.getTags());
            if (productDto.getBuyerIds() != null) {
                List<User> buyers = productDto.getBuyerIds().stream()
                        .map(userId -> userRepository.findById(userId).orElse(null))
                        .filter(user -> user != null)
                        .collect(Collectors.toList());
                product.setBuyers(buyers);
            }
            return ProductMapper.toDto(productRepository.save(product));
        });
    }

    // Delete product
    @Transactional
    public boolean deleteProduct(Long id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Search products by name or description
    public List<ProductDto> searchProducts(String query) {
        if (query == null || query.trim().isEmpty()) {
            return getAllProducts();
        }
        // Assuming repository has a method
        return productRepository.findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(query, query)
                .stream()
                .map(ProductMapper::toDto)
                .collect(Collectors.toList());
    }

    // Get total income from all products
    public double getTotalIncome() {
        return productRepository.findAll().stream()
                .mapToDouble(p -> p.getIncome() != null ? p.getIncome().doubleValue() : 0)
                .sum();
    }

    // Get products bought by a user
    public List<ProductDto> getProductsByBuyer(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            return productRepository.findByBuyersContaining(user.get())
                    .stream()
                    .map(ProductMapper::toDto)
                    .collect(Collectors.toList());
        }
        return List.of();
    }
}