# Customer Microservice

## Description

The Customer Microservice is responsible for managing customer-related operations such as creating, updating, and listing customers. It integrates with the Mercado Pago SDK to interact with Mercado Pago's sandbox environment.

## Features

- Create Customer: Add a new customer to the system.
- List Customers: Retrieve a list of registered customers.
- Update Customer: Modify existing customer details.

## Requirements

- Node.js (>= 18.x)
- NestJS Framework
- Mercado Pago SDK

## How to Run

1. Navigate to the Customer Microservice directory and install dependencies:

```bash
cd customer
npm install
```

2. Start the service:

```bash
npm run start
```

3. Access the service on `http://localhost:3001`.

## Environment Variables

- Set the Mercado Pago access token in your environment.

```bash
MERCADO_PAGO_ACCESS_TOKEN=your_access_token
```

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
