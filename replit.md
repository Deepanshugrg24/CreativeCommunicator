# Portfolio Website - Deepanshu Garg

## Overview

This is a modern full-stack portfolio website built for Deepanshu Garg, a Senior Node.js Developer and AWS Expert. The application showcases professional experience, skills, projects, and provides a contact form for potential clients or employers to get in touch.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL sessions with connect-pg-simple
- **API Design**: RESTful APIs with proper error handling
- **Development**: Hot reloading with Vite integration

### Component Architecture
- **Design System**: shadcn/ui components with Radix UI primitives
- **Theme**: New York style with neutral base color and CSS variables
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Built-in accessibility features from Radix UI

## Key Components

### Frontend Components
1. **Navigation**: Sticky navigation with smooth scrolling and mobile menu
2. **Hero Section**: Landing area with call-to-action buttons and contact links
3. **Experience Timeline**: Professional work history with achievements
4. **Skills Grid**: Categorized technical skills display
5. **Projects Showcase**: Featured projects with technologies and descriptions
6. **Contact Form**: Validated form with real-time feedback
7. **Footer**: Additional contact information and branding

### Backend Components
1. **Contact API**: Handles form submissions with validation
2. **Resume API**: Provides resume download functionality
3. **Storage Layer**: Abstracted storage interface with in-memory implementation
4. **Error Handling**: Centralized error handling middleware
5. **Request Logging**: Custom request/response logging for API endpoints

### Database Schema
- **Contact Submissions Table**: Stores form submissions with metadata
  - Fields: id, name, email, subject, message, createdAt
  - Validation: Zod schemas for type safety and validation

## Data Flow

1. **Client Request**: User interacts with React components
2. **Form Validation**: Client-side validation using React Hook Form + Zod
3. **API Request**: TanStack Query handles HTTP requests to Express backend
4. **Server Processing**: Express routes process requests with validation
5. **Database Operations**: Drizzle ORM handles database interactions
6. **Response Handling**: Structured JSON responses with error handling
7. **UI Updates**: React components update based on response state

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (PostgreSQL serverless)
- **UI Library**: Radix UI primitives for accessible components
- **Animation**: Framer Motion for page transitions and animations
- **Validation**: Zod for runtime type checking and validation
- **Date Handling**: date-fns for date formatting and manipulation

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Database**: Drizzle Kit for schema management and migrations
- **Code Quality**: ESBuild for production builds
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer

### Third-Party Integrations
- **Replit Integration**: Development environment optimizations
- **Error Overlay**: Runtime error handling in development
- **Cartographer**: Code mapping for Replit environment

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both frontend and backend
- **Hot Reloading**: Vite provides instant feedback for frontend changes
- **Database**: Uses environment variable for DATABASE_URL connection
- **Type Checking**: `npm run check` for TypeScript validation

### Production Build
- **Frontend Build**: Vite builds optimized static assets
- **Backend Build**: ESBuild bundles server code with external packages
- **Database Migration**: `npm run db:push` applies schema changes
- **Start Command**: `npm start` runs production server

### Environment Configuration
- **Database**: Requires DATABASE_URL environment variable
- **Build Output**: Frontend assets in `dist/public`, server in `dist`
- **Static Assets**: Served by Express in production mode

## Changelog
- July 06, 2025. Initial setup

## User Preferences
Preferred communication style: Simple, everyday language.