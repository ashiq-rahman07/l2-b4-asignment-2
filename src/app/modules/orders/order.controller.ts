import { OrderService } from './order.service';
import { Bike } from "../products/bike.model";
import {  Request, Response } from "express";


const createOrder = async (req: Request, res: Response)=>{
    
  try {
  
    // const {product:bikeId }= req.body;
    
    // const bikeData = await Bike.findById(bikeId);
    // console.log(bikeData);
    // if (!bikeData) {
    //     throw Error("Product not found.")
    //     // return { success: false, message: "Product not found." };
    //   }
      const result = await OrderService.createOrder(req.body);

      res.status(200).json({
        success: true,
        message: 'Bike update succesfully',
        data:result
   
      });
  
  } catch (error) {
    console.log(error);
 
  }
}


export const OrderControllers = {
    createOrder
}