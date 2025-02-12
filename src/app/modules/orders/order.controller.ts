import httpStatus from 'http-status';
import { OrderService } from './order.service';

import { Request, Response } from 'express';
// import orderValidationSchema from './order.validation';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import AppError from '../../errors/AppError';

const createOrder = catchAsync(async(req,res)=>{
  const user = req.user;
  // console.log(user);

    const order = await OrderService.createOrder(user, req.body, req.ip!);
   

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Order created succesfully',
      data: order
    });
})


const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getAllOrders();

    res.status(200).json({
      message: 'Orders are retrieved succesfully',
      status: true,
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

const verifyPayment = catchAsync(async (req, res) => {
  const order = await OrderService.verifyPayment(req.query.order_id as string);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Order verified successfully",
    data: order,
    success: true,
  });

});

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getTotalRevenue,
  verifyPayment
};
