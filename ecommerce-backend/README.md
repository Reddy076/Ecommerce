# Ecommerce Backend Server

Express.js backend server for the Ecommerce Demo application. Provides RESTful API endpoints for products, cart management, orders, and checkout functionality.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Endpoints](#api-endpoints)
- [Database](#database)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [Development](#development)
- [Project Structure](#project-structure)

## Features

- RESTful API for ecommerce operations
- SQLite database with Sequelize ORM
- Product catalog management
- Shopping cart functionality
- Order processing
- Delivery options
- Default data seeding

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **SQLite** - Database (via sql.js)
- **Sequelize** - ORM for database operations
- **CORS** - Cross-origin resource sharing support

## API Endpoints

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

### Reset (Development)
- `POST /api/reset` - Reset database to default data

## Database

The application uses SQLite as its database through the sql.js library. Sequelize is used as the ORM to interact with the database.

### Models

1. **Product** - Represents items for sale
2. **CartItem** - Items in a user's shopping cart
3. **DeliveryOption** - Available shipping methods
4. **Order** - Completed purchases

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```bash
npm install
```

### Running the Server

#### Development Mode
```bash
npm run dev
```

#### Production Mode
```bash
npm start
```

The server will start on port 3000 (http://localhost:3000) by default.

## Development

### Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run zip` - Create zip file of project

### Default Data

On first run, if the database is empty, the server will automatically populate it with default data from the `defaultData` directory.

## Project Structure

```
.
├── routes/                 # API route handlers
├── models/                 # Database models
├── backend/                # Static JSON data files
├── defaultData/            # Default database seed data
├── images/                 # Static images served by the server
├── server.js              # Main server file
└── ...
```

### Routes

Each route file handles specific API endpoints:
- `cartItems.js` - Cart management endpoints
- `deliveryOptions.js` - Delivery options endpoints
- `orders.js` - Order processing endpoints
- `paymentSummary.js` - Payment summary endpoint
- `products.js` - Product catalog endpoints
- `reset.js` - Development reset endpoint

### Models

Database models defined with Sequelize:
- `Product.js` - Product schema and methods
- `CartItem.js` - Cart item schema and methods
- `DeliveryOption.js` - Delivery option schema and methods
- `Order.js` - Order schema and methods
- `index.js` - Database connection and model associations