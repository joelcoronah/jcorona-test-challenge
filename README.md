# Microservices Architecture - Customer & Payment System

This project is composed of three microservices built with NestJS that communicate with each other using TCP transport. An API Gateway is used to expose HTTP routes and handle communication between clients and microservices. Additionally, Swagger is implemented to document the HTTP endpoints.

## Microservices:

1. API Gateway: Handles HTTP requests and routes them to the appropriate microservices.

2. Customer Microservice: Manages customer-related operations (creating, updating, listing customers) using the Mercado Pago SDK.

3. Payment Microservice: Handles payment processing for registered customers via the Mercado Pago platform.

## Requirements

- Node.js (>= 18.x)
- NestJS Framework
- Mercado Pago SDK
- Docker (optional, for containerization)

## How to Run

1. Clone the repository and install dependencies

```bash
git clone https://github.com/joelcoronah/jcorona-test-challenge.git
cd jcorona-test-challenge
```

2. Start each microservice:

```bash
# API Gateway
cd api-gateway
npm install
npm run start

# Customer Microservice
cd customer
npm install
npm run start

# Payment Microservice
cd payment
npm install
npm run start
```

3. Access Swagger documentation for each service:

- API Gateway: `http://localhost:3000/api`
- Customer Microservice: `http://localhost:3001/api`
- Payment Microservice: `http://localhost:3002/api`

### Available Endpoints

#### 1. Get a List of customers

- Endpoint: `/customers`
- Method: `GET`
- Description: Fetches a list of customers.

#### 2. Create a customer

- Endpoint: `/customers`
- Method: `POST`
- Description: Create a customer.

#### 3. Update a customer

- Endpoint: `/customers/:customerId`
- Method: `PUT`
- Description: Update a customer.

#### 3. Create a payment

- Endpoint: `/payments`
- Method: `POST`
- Description: Create a payment for a customer
