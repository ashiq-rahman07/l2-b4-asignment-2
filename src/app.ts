import express, { Application, NextFunction, Request, Response } from 'express';

import cors from 'cors';

import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors({ origin: 'https://classic-rider.netlify.app', credentials: true }));

// application routes
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.status(200).json({
    status: true,
    message: 'Assignment 2 completed succesfully',
  });
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);
export default app;
