# Portfolio Application

## Overview

This is a modern, full-stack portfolio website built with React and Node.js. The application showcases a developer's skills, experience, projects, and achievements through a clean, animated interface. It features a contact form with backend persistence and a responsive design that works across all devices.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth transitions and scroll-based animations
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: Hot reload with tsx

### Monorepo Structure
- **client/**: Frontend React application
- **server/**: Backend Express.js API
- **shared/**: Shared TypeScript types and database schema
- **migrations/**: Database migration files

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling and theme toggle
2. **Hero Section**: Landing area with personal introduction and social links
3. **About Section**: Personal story with animated statistics counters
4. **Skills Section**: Categorized technical skills with animated progress bars
5. **Experience Section**: Timeline-based work history display
6. **Projects Section**: Featured projects with hover effects and external links
7. **Achievements Section**: Competitive programming accomplishments
8. **Contact Section**: Form with validation and toast notifications
9. **Footer**: Social links and closing information

### Backend Components
1. **API Routes**: RESTful endpoints for contact form and data retrieval
2. **Storage Layer**: Abstracted data access with in-memory fallback
3. **Database Schema**: PostgreSQL tables for users and contacts
4. **Error Handling**: Centralized error management with proper HTTP status codes

### Shared Components
1. **Database Schema**: Drizzle schema definitions with Zod validation
2. **Type Definitions**: TypeScript interfaces for data models
3. **Validation Schemas**: Form validation using Zod

## Data Flow

### Contact Form Submission
1. User fills out contact form with name, email, subject, and message
2. Frontend validates data using Zod schema
3. Form data sent to `/api/contact` endpoint via POST request
4. Backend validates and stores contact in PostgreSQL database
5. Success/error response sent back to frontend
6. Toast notification displays result to user

### Portfolio Data Loading
1. Static portfolio data loaded from JSON file
2. Components consume data directly (no API calls needed)
3. Data includes personal info, skills, experience, projects, and achievements

### Theme Management
1. Theme state managed in React context
2. Stored in localStorage for persistence
3. CSS variables updated on theme change
4. Dark/light mode toggle available in navigation

## External Dependencies

### Frontend Dependencies
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth transitions
- **@radix-ui/***: Accessible UI primitives for components
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight routing library
- **date-fns**: Date manipulation utilities
- **class-variance-authority**: Component variant styling
- **clsx**: Conditional CSS class utilities

### Backend Dependencies
- **express**: Web application framework
- **drizzle-orm**: TypeSQL ORM for database operations
- **@neondatabase/serverless**: Neon PostgreSQL driver
- **connect-pg-simple**: PostgreSQL session store
- **zod**: Schema validation library
- **tsx**: TypeScript execution for development

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking and compilation
- **tailwindcss**: CSS framework
- **postcss**: CSS processing
- **autoprefixer**: CSS vendor prefixing

## Deployment Strategy

### Development Environment
- Frontend served by Vite dev server with HMR
- Backend runs with tsx for TypeScript hot reload
- Database migrations managed with Drizzle Kit
- Environment variables loaded from `.env` file

### Production Build
- Frontend built to static files with Vite
- Backend compiled to ESM bundle with esbuild
- Static files served by Express in production
- Database deployed to Neon serverless PostgreSQL

### Database Management
- Schema defined in `shared/schema.ts`
- Migrations generated and applied with Drizzle Kit
- Connection via DATABASE_URL environment variable
- Session storage in PostgreSQL for scalability

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```