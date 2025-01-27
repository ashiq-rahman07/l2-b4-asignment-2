import httpStatus from 'http-status';
import { OrderService } from './order.service';

import { Request, Response } from 'express';
// import orderValidationSchema from './order.validation';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import AppError from '../../errors/AppError';

const createOrder = catchAsync(async(req,res)=>{
    const result = await OrderService.createOrder(req.body);
   

    if(!result.success){
    
        throw new AppError(
          httpStatus.BAD_REQUEST,
          'Product can not find for this order',
        );
     
    }
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Course is created succesfully',
      data: result.data
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

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getTotalRevenue,
};
