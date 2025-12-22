# Customer Relationship Management (CRM) System

A Spring Boot–centric CRM system that provides a secured REST API and persistence layer, with a TypeScript (Vaadin + Lit) frontend client.

## Tech Stack

### Backend (main component)

- Spring Boot 3
- Spring Web (REST)
- Spring Security (stateless API, HTTP Basic)
- Spring Data JPA + Hibernate
- H2 (in-memory database)

### Frontend (client)

- TypeScript
- Vite dev server
- Vaadin components + Lit

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v6 or later) or Yarn
- Java 20 or later (backend)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd CustomerRelationshipManagement
   ```

2. Install backend dependencies:
   ```bash
   mvn install
   ```

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

## Running the Application

### Development Mode

1. Start the backend server:
   ```bash
   mvn spring-boot:run
   ```
   The backend will be available at `http://localhost:9192`

2. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```
   This will start the Vite development server at `http://localhost:3000`.
   API requests to `/api` are proxied to the Spring Boot server.

### Production Build

1. Build the frontend for production:
   ```bash
   cd frontend
   npm run build
   ```

2. The built files will be in the `frontend/dist` directory.

## Backend Architecture

The backend follows a typical layered Spring Boot structure:

- `controllers/` expose REST endpoints under `/api/**`
- `services/` contain business logic
- `repositories/` contain persistence access (Spring Data)
- `entities/` contain JPA entities

## Security & Authentication

- All endpoints under `/api/**` require authentication by default.
- Public endpoints:
  - `POST /api/auth/login`
  - `POST /api/auth/register`
  - `POST /api/users/register`
- Authentication is configured as **stateless**. Unauthorized requests return `401`.
- The project currently uses **HTTP Basic** for protected endpoints.

API documentation (Swagger UI / OpenAPI):

- Swagger UI: `http://localhost:9192/swagger-ui/index.html`
- OpenAPI JSON: `http://localhost:9192/v3/api-docs`

Actuator:

- Health: `http://localhost:9192/actuator/health`
- Info: `http://localhost:9192/actuator/info`

## Test Account

For testing purposes, you can use the following credentials:

- **Username**: test1
- **Password**: 123456789

## Database

- Default DB: H2 in-memory
- H2 console: `http://localhost:9192/h2-console`

## API Quickstart

The fastest way to verify the backend is running:

1. Start Spring Boot: `mvn spring-boot:run`
2. Call a protected endpoint with HTTP Basic auth:

```bash
curl -u test1:123456789 http://localhost:9192/api/users/me
```

## Project Structure

```
src/main/java/         # Spring Boot backend (controllers/services/repositories/entities)
src/main/resources/    # application.properties, static resources

frontend/
├── public/           # Static files
├── src/
│   ├── views/        # Application views
│   ├── index.ts      # Application entry point
│   └── routes.ts     # Application routes
├── index.html        # Main HTML file
├── package.json      # Frontend dependencies
└── tsconfig.json     # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `mvn spring-boot:run` - Start backend server

## Development

### Backend (main focus)

- Spring Boot REST API under `/api/**`
- Spring Security enabled (stateless, returns `401` for unauthorized API calls)
- Spring Data JPA + H2 (in-memory) for persistence

Useful URLs when the backend is running:

- `http://localhost:9192/api` (API base path)
- `http://localhost:9192/h2-console` (H2 console)
- `http://localhost:9192/swagger-ui/index.html` (Swagger UI)
- `http://localhost:9192/actuator/health` (Actuator health)

Key API endpoints (non-exhaustive):

- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/users/me`
- `GET /api/products`
- `GET /api/groups`

### Frontend (client)

- TypeScript + Vite dev server
- Vaadin components + Lit for UI

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
