import express, { Application, NextFunction, Request, Response } from 'express';

import cors from 'cors';
import { BikeRouter } from './app/modules/products/bike.route';
import { OrderRouter } from './app/modules/orders/order.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', BikeRouter);
app.use('/api/orders', OrderRouter);

//Handle not found

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found.',
  });

  next();
});
export default app;
