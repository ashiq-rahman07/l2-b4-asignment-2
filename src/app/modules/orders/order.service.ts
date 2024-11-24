import { Bike } from '../products/bike.model';
import { CreateOrderResponse, TOrder } from './order.interface';
import { Request, Response } from 'express';
import { Order } from './order.model';

const createOrder = async (orderData: TOrder): Promise<CreateOrderResponse> => {
  const { email, product, quantity, totalPrice } = orderData;

  // Find the product
  const bike = await Bike.findById(product);
  if (!bike) {
    return { success: false, message: 'bike not found' };
  }

  // Check stock availability
  if (bike.quantity < quantity) {
    return { success: false, message: 'Insufficient stock available.' };
  }

  // Create the order
  const order = new Order({
    email,
    product: bike._id,
    quantity,
    totalPrice,
  });

  // Reduce the product quantity
  bike.quantity -= quantity;
  if (bike.quantity === 0) {
    bike.inStock = false;
  }

  // Save the updated product and order
  await bike.save();
  const savedOrder = await order.save();

  return { success: true, data: savedOrder };
};

const getAllOrders = async () => {
  const result = await Order.find();
  return result;
};

const getTotalRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await Order.aggregate([
      //stage-1
      {
        // Join orders with bikes to get bike details
        $lookup: {
          from: 'bikes',
          localField: 'product',
          foreignField: '_id',
          as: 'bikeDetails',
        },
      },
      //stage-2
      {
        // Unwind the bikeDetails array to simplify access
        $unwind: '$bikeDetails',
      },

      //stage-3
      {
        // Calculate total price for each order
        $addFields: {
          orderRevenue: { $multiply: ['$bikeDetails.price', '$quantity'] },
        },
      },

      //stage-4
      {
        // Group to calculate total revenue
        $group: {
          _id: null, // Group all documents together
          totalRevenue: { $sum: '$orderRevenue' },
        },
      },
    ]);
    return totalRevenue[0]?.totalRevenue || 0;
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: 'Failed to calculate total revenue.',
      error: error.message,
    });
  }
};
export const OrderService = {
  createOrder,
  getAllOrders,
  getTotalRevenue,
};
