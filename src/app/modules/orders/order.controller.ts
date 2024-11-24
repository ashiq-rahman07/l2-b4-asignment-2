import { OrderService } from './order.service';

import { Request, Response } from 'express';
import orderValidationSchema from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const zodOrderData = orderValidationSchema.parse(req.body);
    const result = await OrderService.createOrder(zodOrderData);

    if (!result.success) {
      res.status(400).json({
        success: false,
        message: result.message,
      });
    } else {
      res.status(200).json({
        message: 'Order created successfully',
        status: true,
        data: result.data,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getAllOrders();

    res.status(200).json({
      success: true,
      message: 'Ordes are retrieved succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getTotalRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderService.getTotalRevenue(req, res);
    res.status(200).json({
      success: true,
      message: 'Total revenue calculated successfully.',
      data: {
        totalRevenue,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to calculate total revenue.',
      error: error.message,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getTotalRevenue,
};
