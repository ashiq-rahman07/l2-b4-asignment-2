import express, { Application } from 'express'
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

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


export default app;