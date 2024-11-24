import { OrderService } from './order.service';

import {  Request, Response } from "express";


const createOrder = async (req: Request, res: Response)=>{
    
  try {
   
    
      const result = await OrderService.createOrder(req.body);
   

      if (!result.success) {
      res.status(400).json({
          success: false,
          message: result.message,
        });
      }else{
        res.status(200).json({
          message: 'Order created successfully',
          status: true,
          data:result.data
     
        });
      }
  
    
    
     
  
  } catch (err :any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
 
  }
}
const getAllOrders = async (req: Request, res: Response)=>{
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
}


export const OrderControllers = {
    createOrder,
    getAllOrders
}