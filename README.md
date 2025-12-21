# Customer Relationship Management (CRM) System

A modern web-based CRM system built with Vaadin and TypeScript.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or Yarn
- Java 11 or later (for backend)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd CustomerRelationshipManagement
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies (if any):
   ```bash
   # Run Maven to download dependencies
   mvn install
   ```

## Running the Application

### Development Mode

1. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```
   This will start the Vite development server at `http://localhost:3000`

2. Start the backend server (if applicable):
   ```bash
   mvn spring-boot:run
   ```
   The backend will be available at `http://localhost:8080`

### Production Build

1. Build the frontend for production:
   ```bash
   cd frontend
   npm run build
   ```

2. The built files will be in the `frontend/dist` directory.

## Test Account

For testing purposes, you can use the following credentials:

- **Username**: test1
- **Password**: 123456789

## Project Structure

```
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

- The application uses Vaadin components with TypeScript
- Styling is done with CSS (you can find styles in each component)
- State management is handled using LitElement's `@state` decorator

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
