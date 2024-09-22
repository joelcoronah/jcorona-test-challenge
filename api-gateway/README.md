# API Gateway - Microservices Architecture

## Description

The API Gateway is responsible for routing HTTP requests to the appropriate microservices. It serves as the entry point for all client interactions and handles request validation, routing, and error handling.

## Features

- Customer Operations: Route requests to manage customers.
- Payment Operations: Route requests to handle payment transactions.
- Swagger Documentation: Accessible at `http://localhost:3000/api`.

## Requirements

- Node.js (>= 14.x)
- NestJS Framework

## How to Run

1. Navigate to the API Gateway directory and install dependencies:

```bash
cd api-gateway
npm install
```

2. Start the API Gateway:

```bash
npm run start
```

3. Access the service on `http://localhost:3000`.

## Configuration

In `app.module.ts`, the services (Customer and Payment) are registered with their respective TCP ports:

```ts
ClientsModule.register([
  {
    name: 'CUSTOMER_SERVICE',
    transport: Transport.TCP,
    options: { host: 'localhost', port: 3001 },
  },
  {
    name: 'PAYMENT_SERVICE',
    transport: Transport.TCP,
    options: { host: 'localhost', port: 3002 },
  },
]);
```
