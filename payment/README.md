# Payment Microservice

## Description

The Payment Microservice is responsible for handling payment transactions for customers. It interacts with the Mercado Pago SDK to process payments in a sandbox environment.

## Features

- Process Payment: Execute a payment for a registered customer.

## Requirements

- Node.js (>= 18.x)
- NestJS Framework
- Mercado Pago SDK

## How to Run

1. Navigate to the Payment Microservice directory and install dependencies:

```bash
cd payment
npm install
```

2. Start the service:

```bash
npm run start
```

3. Access the service on `http://localhost:3002`.

## Environment Variables

- Set the Mercado Pago access token in your environment.

```bash
ACCESS_TOKEN=your_access_token
```

### Available Endpoints

#### 1. Create a payment

- Endpoint: `/payments`
- Method: `POST`
- Description: Create a payment for a customer

Example payload:

```JSON
{
  "transaction_amount": 100,
  "token": "TEST-XXXXXXXXXXX",
  "description": "Test Payment",
  "installments": 1,
  "payment_method_id": "visa",
  "payer": {
    "email": "test_user@test.com"
  }
}

```
