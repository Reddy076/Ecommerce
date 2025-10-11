# Ecommerce Demo Application

A modern ecommerce web application built with React, Vite, and Node.js/Express backend. This project demonstrates a complete shopping experience with product browsing, cart management, checkout process, and order tracking.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Development](#development)
- [Deployment](#deployment)
- [Live Demo](#live-demo)
- [Testing](#testing)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)

## Features

- Product browsing and listing
- Shopping cart functionality
- Checkout process with delivery options
- Order placement and tracking
- Responsive design for mobile and desktop
- RESTful API integration

## Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Ultra-fast build tool
- **React Router v7** - Client-side routing
- **Axios** - HTTP client for API requests
- **CSS Modules** - Scoped styling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **SQLite** - Database (via sql.js)
- **Sequelize** - ORM for database operations

### Development & Testing
- **Vitest** - Unit testing framework
- **ESLint** - Code linting
- **Testing Library** - React component testing

## Project Structure

```
Ecommerce/
├── Ecommerce-Demo/         # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── Pages/          # Page components (Home, Checkout, Orders)
│   │   ├── utils/          # Utility functions
│   │   └── ...
│   └── ...
├── ecommerce-backend/      # Backend Express server
│   ├── routes/             # API route handlers
│   ├── models/             # Database models
│   ├── backend/            # Static data files
│   └── ...
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install frontend dependencies:
   ```bash
   cd Ecommerce-Demo
   npm install
   ```

3. Install backend dependencies:
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
   The backend will run on http://localhost:3000

2. Start the frontend development server:
   ```bash
   cd Ecommerce-Demo
   npm run dev
   ```
   The frontend will run on http://localhost:5173

## Development

### Available Scripts

#### Frontend (Ecommerce-Demo)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

#### Backend (ecommerce-backend)
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Code Structure

Frontend components are organized by feature:
- `/src/components` - Shared components (Header, etc.)
- `/src/Pages` - Page-level components (Home, Checkout, Orders)
- `/src/utils` - Helper functions and utilities

Backend follows MVC pattern:
- `/routes` - Request handlers
- `/models` - Database models
- `/controllers` - Business logic (embedded in routes)

## Deployment

### Building for Production

To create a production build of the frontend:

```bash
npm run build
```

This command will:
1. Bundle and optimize all JavaScript, CSS, and assets
2. Output the production build to the `../ecommerce-backend/dist` directory
3. Create a self-contained, optimized version of the application

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

Note: This requires the production build to be created first with `npm run build`.

### Deployment Process

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Deploy the backend server which will automatically serve the frontend:
   ```bash
   cd ../ecommerce-backend
   npm start
   ```

The application will be available on the configured port (default: 3000).

## Live Demo

You can access the live demo of the application at:
[http://ecommerce-project-react-env.eba-x3amme33.us-east-1.elasticbeanstalk.com/](http://ecommerce-project-react-env.eba-x3amme33.us-east-1.elasticbeanstalk.com/)

## Testing

Run frontend tests with Vitest:
```bash
cd Ecommerce-Demo
npm test
```

## API Endpoints

The backend provides the following RESTful API endpoints:

### Products
- `GET /api/products` - Get all products

### Cart Items
- `GET /api/cart-items` - Get cart items
- `POST /api/cart-items` - Add item to cart
- `PUT /api/cart-items/:id` - Update cart item
- `DELETE /api/cart-items/:id` - Remove item from cart

### Delivery Options
- `GET /api/delivery-options` - Get delivery options

### Orders
- `GET /api/orders` - Get orders
- `POST /api/orders` - Create new order

### Payment Summary
- `GET /api/payment-summary` - Get payment summary

## Folder Structure

### Frontend (Ecommerce-Demo)
```
src/
├── components/
│   ├── Header.jsx
│   └── header.css
├── Pages/
│   ├── checkout/
│   │   ├── CheckoutPage.jsx
│   │   ├── DeliveryOptions.jsx
│   │   ├── OrderSummary.jsx
│   │   └── PaymentSummary.jsx
│   ├── home/
│   │   ├── HomePage.jsx
│   │   ├── Product.jsx
│   │   └── ProductsGrid.jsx
│   └── orders/
│       └── OrdersPage.jsx
├── utils/
│   ├── money.js
│   └── money.tests.js
├── App.jsx
├── main.jsx
└── index.css
```

### Backend (ecommerce-backend)
```
routes/
├── cartItems.js
├── deliveryOptions.js
├── orders.js
├── paymentSummary.js
├── products.js
└── reset.js

models/
├── CartItem.js
├── DeliveryOption.js
├── Order.js
├── Product.js
└── index.js
```