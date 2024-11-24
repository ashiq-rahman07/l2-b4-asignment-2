
## Live Link
[text](https://asignment-2-seven.vercel.app/)
## API Endpoints

## Bike Endpoints

POST /api/products  – Create a new bike.
GET /api/products – Get all bikes.
GET /api/products/:bikeId  – Get a specific bike by ID.
patch /api/products/:bikeId – Update a bike by ID.
DELETE /api/products/:bikeId – Delete a bike by ID.

## Order Endpoints
POST /api/orders– Place a bike order.
GET /api/orders/revenue – Calculate total revenue.

Validation
Input validation is handled using Zod for all requests, ensuring proper data structure and format.

