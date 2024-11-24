import express, { Application, NextFunction } from 'express'
import { Request, Response } from "express";
import cors from 'cors';
import { BikeRouter } from './app/modules/products/bike.route';
import { OrderRouter } from './app/modules/orders/order.route';


const app:Application = express()

//parsers
app.use(express.json());
app.use(cors());


// application routes
app.use('/api/products', BikeRouter)
app.use('/api/orders', OrderRouter)

// app.get(';/', (req, res) => {
//   res.send('Hello World!')
// })
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    res.status(500).json({ error: err.message || "Internal Server Error" });
  });

export default app;