package services;

import entities.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import repositories.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Arrays;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final UserRepository userRepository;
    private final GroupRepository groupRepository;
    private final ProductRepository productRepository;
    private final ResearchRepository researchRepository;
    private final QuestionRepository questionRepository;

    @Bean
    public CommandLineRunner loadData() {
        return args -> {
            if (userRepository.count() == 0) {
                initializeData();
                System.out.println("Database initialized successfully with test data");
            } else {
                System.out.println("Database already populated");
            }
        };
    }

    private void initializeData() {
        // Create users
        User admin = new User();
        admin.setEmail("admin@crm.com");
        admin.setPassword("admin");
        admin.setFirstName("Admin");
        admin.setLastName("User");
        admin.setCountry("Bulgaria");
        admin.setBirthDate(LocalDate.of(1980, 1, 15));
        admin.setRole(Role.ADMIN);
        admin.setLeader(false);
        userRepository.save(admin);

        User maria = new User();
        maria.setEmail("maria@crm.com");
        maria.setPassword("maria123");
        maria.setFirstName("Maria");
        maria.setLastName("Koleva");
        maria.setCountry("Bulgaria");
        maria.setBirthDate(LocalDate.of(1990, 3, 22));
        maria.setRole(Role.LEADER);
        maria.setLeader(true);
        userRepository.save(maria);

        User ivan = new User();
        ivan.setEmail("ivan@crm.com");
        ivan.setPassword("ivan123");
        ivan.setFirstName("Ivan");
        ivan.setLastName("Petrov");
        ivan.setCountry("Bulgaria");
        ivan.setBirthDate(LocalDate.of(1988, 7, 10));
        ivan.setRole(Role.LEADER);
        ivan.setLeader(true);
        userRepository.save(ivan);

        User alex = new User();
        alex.setEmail("alex@example.com");
        alex.setPassword("alex123");
        alex.setFirstName("Alexandra");
        alex.setLastName("Angelova");
        alex.setCountry("Bulgaria");
        alex.setBirthDate(LocalDate.of(1995, 5, 18));
        alex.setRole(Role.CLIENT);
        userRepository.save(alex);

        User test = new User();
        test.setEmail("test@test.com");
        test.setPassword("test123");
        test.setFirstName("Test");
        test.setLastName("User");
        test.setCountry("Bulgaria");
        test.setBirthDate(LocalDate.of(1992, 11, 30));
        test.setRole(Role.CLIENT);
        userRepository.save(test);

        // More users
        User nikola = new User();
        nikola.setEmail("nikola@example.com");
        nikola.setPassword("pass123");
        nikola.setFirstName("Nikola");
        nikola.setLastName("Vasilev");
        nikola.setCountry("Bulgaria");
        nikola.setBirthDate(LocalDate.of(1998, 2, 14));
        nikola.setRole(Role.CLIENT);
        userRepository.save(nikola);

        User katya = new User();
        katya.setEmail("katya@example.com");
        katya.setPassword("pass123");
        katya.setFirstName("Katerina");
        katya.setLastName("Dimitrova");
        katya.setCountry("Bulgaria");
        katya.setBirthDate(LocalDate.of(1996, 9, 25));
        katya.setRole(Role.CLIENT);
        userRepository.save(katya);

        User george = new User();
        george.setEmail("george@example.com");
        george.setPassword("pass123");
        george.setFirstName("Georgi");
        george.setLastName("Popov");
        george.setCountry("Bulgaria");
        george.setBirthDate(LocalDate.of(1991, 6, 12));
        george.setRole(Role.CLIENT);
        userRepository.save(george);

        User sophia = new User();
        sophia.setEmail("sophia@example.com");
        sophia.setPassword("pass123");
        sophia.setFirstName("Sophia");
        sophia.setLastName("Ivanova");
        sophia.setCountry("Bulgaria");
        sophia.setBirthDate(LocalDate.of(1997, 1, 8));
        sophia.setRole(Role.CLIENT);
        userRepository.save(sophia);

        User dmitri = new User();
        dmitri.setEmail("dmitri@example.com");
        dmitri.setPassword("pass123");
        dmitri.setFirstName("Dmitri");
        dmitri.setLastName("Sokolov");
        dmitri.setCountry("Russia");
        dmitri.setBirthDate(LocalDate.of(1989, 4, 20));
        dmitri.setRole(Role.CLIENT);
        userRepository.save(dmitri);

        // Create groups
        Group marketing = new Group();
        marketing.setName("Marketing Team");
        marketing.setTokenKey("MKT-2024-001");
        marketing.setCreationDate(LocalDate.of(2024, 1, 15));
        marketing.setCreatedBy(maria);
        marketing.setMembers(Arrays.asList(maria, alex, test, nikola));
        groupRepository.save(marketing);

        Group sales = new Group();
        sales.setName("Sales Department");
        sales.setTokenKey("SLS-2024-001");
        sales.setCreationDate(LocalDate.of(2024, 2, 1));
        sales.setCreatedBy(ivan);
        sales.setMembers(Arrays.asList(ivan, katya, george, sophia));
        groupRepository.save(sales);

        Group support = new Group();
        support.setName("Customer Support");
        support.setTokenKey("CST-2024-001");
        support.setCreationDate(LocalDate.of(2024, 3, 10));
        support.setCreatedBy(maria);
        support.setMembers(Arrays.asList(maria, alex, dmitri));
        groupRepository.save(support);

        // Create products
        Product p1 = new Product();
        p1.setName("CRM Pro License");
        p1.setDescription("Premium CRM with advanced analytics");
        p1.setIncome(new BigDecimal("99.99"));
        p1.setTags(Arrays.asList("enterprise", "crm", "saas"));
        productRepository.save(p1);

        Product p2 = new Product();
        p2.setName("CRM Standard License");
        p2.setDescription("Standard CRM with core features");
        p2.setIncome(new BigDecimal("49.99"));
        p2.setTags(Arrays.asList("basic", "crm", "saas"));
        productRepository.save(p2);

        Product p3 = new Product();
        p3.setName("Analytics Add-on");
        p3.setDescription("Advanced analytics module");
        p3.setIncome(new BigDecimal("29.99"));
        p3.setTags(Arrays.asList("analytics", "ai", "reporting"));
        productRepository.save(p3);

        Product p4 = new Product();
        p4.setName("Mobile App License");
        p4.setDescription("Mobile app for iOS and Android");
        p4.setIncome(new BigDecimal("19.99"));
        p4.setTags(Arrays.asList("mobile", "ios", "android"));
        productRepository.save(p4);

        Product p5 = new Product();
        p5.setName("API Access Package");
        p5.setDescription("REST API access for integrations");
        p5.setIncome(new BigDecimal("39.99"));
        p5.setTags(Arrays.asList("api", "integration", "developer"));
        productRepository.save(p5);

        // Create research surveys
        Research r1 = new Research();
        r1.setName("Customer Satisfaction Survey");
        r1.setSubject("Customer Satisfaction");
        r1.setDescription("Survey to measure customer satisfaction");
        r1.setCreatedBy(maria);
        r1.setTags(Arrays.asList("survey", "customer"));
        researchRepository.save(r1);

        Question q1 = new Question();
        q1.setContent("How satisfied are you with our product");
        q1.setType(QuestionType.SINGLE_CHOICE);
        q1.setResearch(r1);
        questionRepository.save(q1);

        Question q2 = new Question();
        q2.setContent("Which features do you use most");
        q2.setType(QuestionType.MULTIPLE_CHOICE);
        q2.setResearch(r1);
        questionRepository.save(q2);

        Research r2 = new Research();
        r2.setName("Market Trends Analysis");
        r2.setSubject("Market Research");
        r2.setDescription("Analysis of current market trends");
        r2.setCreatedBy(ivan);
        r2.setTags(Arrays.asList("market", "analysis"));
        researchRepository.save(r2);

        Question q3 = new Question();
        q3.setContent("What is your primary industry");
        q3.setType(QuestionType.SINGLE_CHOICE);
        q3.setResearch(r2);
        questionRepository.save(q3);

        Research r3 = new Research();
        r3.setName("Product Feedback Study");
        r3.setSubject("Product Development");
        r3.setDescription("Gathering feedback on new product features");
        r3.setCreatedBy(maria);
        r3.setTags(Arrays.asList("feedback", "product"));
        researchRepository.save(r3);

        Question q4 = new Question();
        q4.setContent("How likely would you recommend our product");
        q4.setType(QuestionType.SINGLE_CHOICE);
        q4.setResearch(r3);
        questionRepository.save(q4);

        Research r4 = new Research();
        r4.setName("User Experience Research");
        r4.setSubject("UX Study");
        r4.setDescription("UX research to improve interface");
        r4.setCreatedBy(ivan);
        r4.setTags(Arrays.asList("ux", "usability"));
        researchRepository.save(r4);

        Question q5 = new Question();
        q5.setContent("How easy is it to navigate the application");
        q5.setType(QuestionType.SINGLE_CHOICE);
        q5.setResearch(r4);
        questionRepository.save(q5);

        System.out.println("Test data loaded: 10 users, 3 groups, 5 products, 4 surveys");
    }
}

