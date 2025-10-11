# Ecommerce Fullstack Application

A complete ecommerce solution with a React frontend and Node.js/Express backend. This project demonstrates a full shopping experience including product browsing, cart management, checkout process, and order tracking.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Live Demo](#live-demo)
- [API Documentation](#api-documentation)
- [Testing](#testing)

## Overview

This ecommerce application consists of two main parts:

1. **Frontend**: A React application built with Vite that provides the user interface for browsing products, managing carts, and completing purchases.
2. **Backend**: A Node.js/Express server that serves the RESTful API and manages the database.

## Project Structure

```
Ecommerce/
├── Ecommerce-Demo/         # Frontend React application
│   ├── src/                # Source code
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   └── README.md           # Frontend documentation
├── ecommerce-backend/      # Backend Express server
│   ├── routes/             # API endpoints
│   ├── models/             # Database models
│   ├── backend/            # Static data files
│   ├── package.json        # Backend dependencies
│   └── README.md           # Backend documentation
└── README.md               # This file
```

## Features

### Frontend Features
- Product listing and browsing
- Shopping cart functionality
- Checkout process with delivery options
- Order history and tracking
- Responsive design for all devices
- Client-side routing

### Backend Features
- RESTful API for all ecommerce operations
- SQLite database with Sequelize ORM
- Product catalog management
- Cart and order processing
- Delivery options
- Automatic data seeding

## Tech Stack

### Frontend
- React 19
- Vite
- React Router v7
- Axios
- CSS Modules

### Backend
- Node.js
- Express.js
- SQLite (sql.js)
- Sequelize ORM

### Development Tools
- ESLint
- Vitest (frontend testing)
- Nodemon (backend development)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install frontend dependencies:
   ```bash
   cd Ecommerce-Demo
   npm install
   ```

2. Install backend dependencies:
   ```bash
   cd ../ecommerce-backend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd ecommerce-backend
   npm run dev
   ```

2. In a separate terminal, start the frontend:
   ```bash
   cd Ecommerce-Demo
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000/api/

## Development Workflow

### Frontend Development
1. Work in the `Ecommerce-Demo` directory
2. Use `npm run dev` for hot-reloading development server
3. Components are organized by feature in the `src` directory

### Backend Development
1. Work in the `ecommerce-backend` directory
2. Use `npm run dev` for auto-restarting development server
3. API routes are in the `routes` directory
4. Database models are in the `models` directory

### Code Organization

Frontend:
- `src/components/` - Reusable UI components
- `src/Pages/` - Page-level components
- `src/utils/` - Utility functions

Backend:
- `routes/` - API endpoint handlers
- `models/` - Database models
- `defaultData/` - Seed data for initial database population

## Deployment

### Building for Production

1. Build the frontend application:
   ```bash
   cd Ecommerce-Demo
   npm run build
   ```
   This will create a production-ready build in the `ecommerce-backend/dist` directory.

2. Start the backend server in production mode:
   ```bash
   cd ../ecommerce-backend
   npm start
   ```

The application will be served on port 3000 by default. The backend server serves both the API endpoints and the frontend static files.

### Environment Variables

For production deployment, you can configure the following environment variables:

- `PORT` - Port for the server to listen on (default: 3000)

Example `.env` file:
```env
PORT=8080
```

### Deploying to Cloud Platforms

#### Heroku
1. Create a new Heroku app
2. Set the buildpack to Node.js
3. Add the following to your `package.json` in the backend directory:
   ```json
   "engines": {
     "node": "18.x"
   }
   ```
4. Deploy using Git:
   ```bash
   git push heroku main
   ```

#### Render
1. Create a new web service
2. Connect your GitHub repository
3. Set the build command to:
   ```bash
   cd Ecommerce-Demo && npm install && npm run build
   ```
4. Set the start command to:
   ```bash
   cd ecommerce-backend && npm install && npm start
   ```

## Live Demo

You can access the live demo of the application at:
[http://ecommerce-project-react-env.eba-x3amme33.us-east-1.elasticbeanstalk.com/](http://ecommerce-project-react-env.eba-x3amme33.us-east-1.elasticbeanstalk.com/)

## API Documentation

The backend provides a RESTful API at `/api/` with the following main endpoints:

- `/api/products` - Product catalog
- `/api/cart-items` - Shopping cart management
- `/api/delivery-options` - Shipping options
- `/api/orders` - Order processing
- `/api/payment-summary` - Checkout payment information

See the individual README files in each directory for detailed API documentation.

## Testing

Frontend tests are written with Vitest and can be run with:
```bash
cd Ecommerce-Demo
npm test
```

Backend testing can be added by implementing test suites for each route handler.