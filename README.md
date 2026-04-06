# Class Manager

A full-stack application for managing classroom activities and student information.

## Overview

Class Manager is a TypeScript-based project featuring a React frontend with modern UI components and an Express backend with database support. It's designed to provide a comprehensive solution for classroom management.

## Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Refine** - Admin dashboard framework
- **React Router** - Client-side routing
- **Radix UI** - Accessible UI components
- **React Hook Form** - Form management

### Backend
- **Node.js / Express** - Server framework
- **TypeScript** - Type-safe backend code
- **Drizzle ORM** - Database ORM
- **Neon Database** - PostgreSQL serverless database
- **CORS** - Cross-origin resource sharing

## Project Structure

### Install root dependencies
```npm install```

### Install frontend dependencies
```cd frontend && npm install```

### Install backend dependencies
```cd ../backend && npm install```

# Migration
```
cd backend
npm run db:generate  # Generate migration files
npm run db:migrate   # Run migrations
```
