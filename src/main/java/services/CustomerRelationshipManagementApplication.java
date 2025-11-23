package services;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {
    "controllers",
    "services",
    "mapper",
    "dto",
    "repositories",
    "entities"
})
@EnableJpaRepositories(basePackages = "repositories")
@EntityScan(basePackages = "entities")
public class CustomerRelationshipManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(CustomerRelationshipManagementApplication.class, args);
    }
}
