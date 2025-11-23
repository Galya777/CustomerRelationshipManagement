package com.example.customerrelationshipmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(
        scanBasePackages = {
                // Spring Boot application package
                "com.example.customerrelationshipmanagement",
                // Project packages with components not under the app package
                "controllers",
                "services",
                "mapper"
        }
)
@EnableJpaRepositories(basePackages = {"repositories"})
@EntityScan(basePackages = {"entities"})
public class CustomerRelationshipManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(CustomerRelationshipManagementApplication.class, args);
    }

}
