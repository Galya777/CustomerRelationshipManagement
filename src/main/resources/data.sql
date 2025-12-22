-- Mock Test Data for CRM System
-- This data will be loaded automatically on application startup

-- Insert Users
INSERT INTO "user" (id, email, password, first_name, last_name, country, birth_date, role, is_leader)
VALUES
-- Admin user
(1, 'admin@crm.com', '$2a$10$slYQmyNdGzin7olVAklCOuK1w7wnQSuVdfLs8.W0mUeSKbCbDMZwS', 'Admin', 'User', 'Bulgaria', '1980-01-15', 'ADMIN', false),

-- Leaders
(2, 'maria@crm.com', '$2a$10$slYQmyNdGzin7olVAklCOuK1w7wnQSuVdfLs8.W0mUeSKbCbDMZwS', 'Maria', 'Koleva', 'Bulgaria', '1990-03-22', 'LEADER', true),
(3, 'ivan@crm.com', '$2a$10$slYQmyNdGzin7olVAklCOuK1w7wnQSuVdfLs8.W0mUeSKbCbDMZwS', 'Ivan', 'Petrov', 'Bulgaria', '1988-07-10', 'LEADER', true),

-- Regular clients
(4, 'alex@example.com', '$2a$10$slYQmyNdGzin7olVAklCOuK1w7wnQSuVdfLs8.W0mUeSKbCbDMZwS', 'Alexandra', 'Angelova', 'Bulgaria', '1995-05-18', 'CLIENT', false),
(5, 'test@test.com', '$2a$10$slYQmyNdGzin7olVAklCOuK1w7wnQSuVdfLs8.W0mUeSKbCbDMZwS', 'Test', 'User', 'Bulgaria', '1992-11-30', 'CLIENT', false),
(6, 'nikola@example.com', '$2a$10$slYQmyNdGzin7olVAklCOuK1w7wnQSuVdfLs8.W0mUeSKbCbDMZwS', 'Nikola', 'Vasilev', 'Bulgaria', '1998-02-14', 'CLIENT', false),
(7, 'katya@example.com', '$2a$10$slYQmyNdGzin7olVAklCOuK1w7wnQSuVdfLs8.W0mUeSKbCbDMZwS', 'Katerina', 'Dimitrova', 'Bulgaria', '1996-09-25', 'CLIENT', false),
(8, 'george@example.com', '$2a$10$slYQmyNdGzin7olVAklCOuK1w7wnQSuVdfLs8.W0mUeSKbCbDMZwS', 'Georgi', 'Popov', 'Bulgaria', '1991-06-12', 'CLIENT', false),
(9, 'sophia@example.com', '$2a$10$slYQmyNdGzin7olVAklCOuK1w7wnQSuVdfLs8.W0mUeSKbCbDMZwS', 'Sophia', 'Ivanova', 'Bulgaria', '1997-01-08', 'CLIENT', false),
(10, 'dmitri@example.com', '$2a$10$slYQmyNdGzin7olVAklCOuK1w7wnQSuVdfLs8.W0mUeSKbCbDMZwS', 'Dmitri', 'Sokolov', 'Russia', '1989-04-20', 'CLIENT', false);

-- Insert Groups
INSERT INTO groups (id, name, token_key, creation_date, created_by_id)
VALUES
(1, 'Marketing Team', 'MKT-2024-001', '2024-01-15', 2),
(2, 'Sales Department', 'SLS-2024-001', '2024-02-01', 3),
(3, 'Customer Support', 'CST-2024-001', '2024-03-10', 2);

-- Insert Group Members
INSERT INTO groups_members (group_id, members_id)
VALUES
(1, 2), (1, 4), (1, 5), (1, 6),
(2, 3), (2, 7), (2, 8), (2, 9),
(3, 2), (3, 4), (3, 10);

-- Insert Products
INSERT INTO product (id, name, description, income)
VALUES
(1, 'CRM Pro License', 'Premium CRM license with advanced analytics and reporting', 99.99),
(2, 'CRM Standard License', 'Standard CRM license with core features', 49.99),
(3, 'Analytics Add-on', 'Advanced analytics and predictive insights module', 29.99),
(4, 'Mobile App License', 'Native mobile app for iOS and Android', 19.99),
(5, 'API Access Package', 'Full REST API access for integrations', 39.99);

-- Insert Product Tags
INSERT INTO product_tags (product_id, tags)
VALUES
(1, 'enterprise'), (1, 'crm'), (1, 'saas'),
(2, 'basic'), (2, 'crm'), (2, 'saas'),
(3, 'analytics'), (3, 'ai'), (3, 'reporting'),
(4, 'mobile'), (4, 'ios'), (4, 'android'),
(5, 'api'), (5, 'integration'), (5, 'developer');

-- Insert Product Buyers
INSERT INTO product_buyers (product_id, buyers_id)
VALUES
(1, 2), (1, 3), (1, 4),
(2, 5), (2, 6), (2, 7), (2, 8),
(3, 2), (3, 3),
(4, 4), (4, 5), (4, 9),
(5, 2), (5, 10);

-- Insert Research
INSERT INTO research (id, name, subject, description, created_by_id)
VALUES
(1, 'Customer Satisfaction Survey 2024', 'Customer Satisfaction', 'Annual survey to measure customer satisfaction and identify improvement areas', 2),
(2, 'Market Trends Analysis', 'Market Research', 'In-depth analysis of current market trends and competitor landscape', 3),
(3, 'Product Feedback Study', 'Product Development', 'Gathering feedback on new product features and usability', 2),
(4, 'User Experience Research', 'UX Study', 'Comprehensive UX research to improve user interface and experience', 3);

-- Insert Research Tags
INSERT INTO research_tags (research_id, tags)
VALUES
(1, 'survey'), (1, 'customer'), (1, 'satisfaction'),
(2, 'market'), (2, 'competitive'), (2, 'analysis'),
(3, 'feedback'), (3, 'product'), (3, 'features'),
(4, 'ux'), (4, 'usability'), (4, 'interface');

-- Insert Questions
INSERT INTO question (id, content, type, research_id)
VALUES
-- Research 1: Customer Satisfaction
(1, 'How satisfied are you with our product?', 'SINGLE_CHOICE', 1),
(2, 'Which features do you use most? (Select all that apply)', 'MULTIPLE_CHOICE', 1),
(3, 'What improvements would you suggest?', 'TEXT', 1),

-- Research 2: Market Trends
(4, 'What is your primary industry?', 'SINGLE_CHOICE', 2),
(5, 'Which market trends are most relevant to your business?', 'MULTIPLE_CHOICE', 2),
(6, 'How do you see the market evolving in the next 12 months?', 'TEXT', 2),

-- Research 3: Product Feedback
(7, 'How likely are you to recommend our product to others?', 'SINGLE_CHOICE', 3),
(8, 'Which new features are most important to you?', 'MULTIPLE_CHOICE', 3),

-- Research 4: UX Research
(9, 'How easy is it to navigate the application?', 'SINGLE_CHOICE', 4),
(10, 'What parts of the interface confuse you?', 'TEXT', 4);

-- Insert Answers
INSERT INTO answer (id, text, question_id)
VALUES
-- Question 1 answers
(1, 'Very Satisfied', 1),
(2, 'Satisfied', 1),
(3, 'Neutral', 1),
(4, 'Dissatisfied', 1),

-- Question 2 answers
(5, 'Dashboard', 2),
(6, 'Reporting', 2),
(7, 'Analytics', 2),
(8, 'User Management', 2),

-- Question 4 answers
(9, 'Technology/Software', 4),
(10, 'Finance/Banking', 4),
(11, 'Healthcare', 4),
(12, 'Retail/E-commerce', 4),

-- Question 5 answers
(13, 'Digital Transformation', 5),
(14, 'Cloud Migration', 5),
(15, 'AI and Automation', 5),
(16, 'Data Analytics', 5),

-- Question 7 answers
(17, 'Very Likely', 7),
(18, 'Likely', 7),
(19, 'Maybe', 7),
(20, 'Unlikely', 7),

-- Question 9 answers
(21, 'Very Easy', 9),
(22, 'Easy', 9),
(23, 'Moderate', 9),
(24, 'Difficult', 9);

-- Insert Research Results (User Participation)
INSERT INTO research_result (id, submitted_at, research_id, user_id)
VALUES
(1, '2024-11-15 10:30:00', 1, 4),
(2, '2024-11-16 14:20:00', 1, 5),
(3, '2024-11-17 09:15:00', 1, 6),
(4, '2024-11-15 16:45:00', 2, 7),
(5, '2024-11-17 11:00:00', 2, 8),
(6, '2024-11-18 13:30:00', 3, 9),
(7, '2024-11-16 10:00:00', 4, 4),
(8, '2024-11-18 15:20:00', 4, 10);

-- Insert User Answers
INSERT INTO user_answer (id, answer_text, research_result_id, question_id)
VALUES
-- Research Result 1 (user 4)
(1, 'Very Satisfied', 1, 1),
(2, 'Dashboard,Analytics', 1, 2),
(3, 'Great product, very easy to use!', 1, 3),

-- Research Result 2 (user 5)
(4, 'Satisfied', 2, 1),
(5, 'Dashboard,Reporting,User Management', 2, 2),
(6, 'Could improve mobile experience', 2, 3),

-- Research Result 3 (user 6)
(7, 'Neutral', 3, 1),
(8, 'Reporting,Analytics', 3, 2),
(9, 'More customization options needed', 3, 3),

-- Research Result 4 (user 7)
(10, 'Technology/Software', 4, 4),
(11, 'Digital Transformation,Cloud Migration', 4, 5),
(12, 'Cloud and AI will dominate next year', 4, 6),

-- Research Result 5 (user 8)
(13, 'Finance/Banking', 5, 4),
(14, 'Cloud Migration,Data Analytics', 5, 5),
(15, 'Data analytics is critical for our business', 5, 6),

-- Research Result 6 (user 9)
(16, 'Very Likely', 6, 7),
(17, 'Dashboard,Analytics', 6, 8),

-- Research Result 7 (user 4)
(18, 'Very Easy', 7, 9),
(19, 'Everything is intuitive and clear', 7, 10),

-- Research Result 8 (user 10)
(20, 'Easy', 8, 9),
(21, 'Some advanced settings are confusing', 8, 10);

-- Reset auto-increment sequences for H2
ALTER SEQUENCE "user_seq" RESTART WITH 11;
ALTER SEQUENCE groups_seq RESTART WITH 4;
ALTER SEQUENCE product_seq RESTART WITH 6;
ALTER SEQUENCE research_seq RESTART WITH 5;
ALTER SEQUENCE question_seq RESTART WITH 11;
ALTER SEQUENCE answer_seq RESTART WITH 25;
ALTER SEQUENCE research_result_seq RESTART WITH 9;
ALTER SEQUENCE user_answer_seq RESTART WITH 22;

