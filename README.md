# PaymentAPI

A Node.js Express API for handling Stripe payments with a layered modular architecture.

## Features

- Stripe payment integration
- Checkout session creation
- Modular layered architecture (controllers, services, models, routes, config)
- CORS enabled
- Environment-based configuration

## Project Structure

```
PaymentAPI/
├── config/
│   └── stripe.js          # Stripe configuration
├── controllers/
│   └── paymentController.js # Payment request handlers
├── models/
│   └── store.js           # Product data model
├── routes/
│   └── paymentRoutes.js   # Payment API routes
├── services/
│   └── stripeService.js   # Stripe business logic
├── utils/                 # Utility functions (if needed)
├── public/                # Static files (if needed)
├── .env                   # Environment variables
├── package.json
├── server.js              # Main application entry point
└── README.md
```

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd PaymentAPI
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Stripe secret key:
   ```
   PORT=3000
   STRIPE_PRIVATE_KEY=sk_test_your_stripe_secret_key_here
   ```

4. Start the server:
   ```bash
   npm run server
   ```

The server will start on `http://localhost:3000`.

## API Endpoints

### POST /create-checkout-session
Creates a Stripe checkout session for payment.

**Request Body:**
```json
{
  "items": [
    {
      "id": 1,
      "quantity": 2
    }
  ]
}
```

**Response:**
```json
{
  "url": "https://checkout.stripe.com/pay/cs_test_..."
}
```

### GET /success
Payment success page.

### GET /cancel
Payment cancellation page.

## Available Products

- ID 1: Sugar - $10.00
- ID 2: Flour - $20.40

## Architecture

This project follows a layered modular architecture:

- **Routes Layer**: Defines API endpoints and maps them to controllers.
- **Controllers Layer**: Handles HTTP requests and responses, delegates business logic to services.
- **Services Layer**: Contains business logic, interacts with external services (Stripe).
- **Models Layer**: Data models and in-memory data stores.
- **Config Layer**: Configuration for external services.

## Dependencies

- Express.js: Web framework
- Stripe: Payment processing
- CORS: Cross-origin resource sharing
- Dotenv: Environment variable management

## Development

To run in development mode with auto-restart:
```bash
npm run server
```

## License

ISC