import express from 'express';
import { OrderControllers } from './order.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/create-order',auth('customer'), OrderControllers.createOrder);
router.get("/verify", auth('customer'), OrderControllers.verifyPayment);
router.get('/',
    // auth('admin','customer'),
     OrderControllers.getAllOrders);
router.get('/revenue', OrderControllers.getTotalRevenue);

export const OrderRouter = router;
