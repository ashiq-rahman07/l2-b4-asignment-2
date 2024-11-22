import { Bike } from "../products/bike.model";
import { TOrder } from "./order.interface";

import { Order } from "./order.model";


const createOrder =async(orderData:TOrder)=>{

 try {
  const {product:bikeId }= orderData;
  const bikeData = await Bike.findById(bikeId);
  // Check product availability
  if (!bikeData || !bikeData.inStock || bikeData.quantity < orderData.quantity) {
    return {
        success: false,
        message: `Insufficient stock for ${bikeData?.name || "the product"}. Available quantity: ${bikeData?.quantity || 0}.`
    };
}

 // Update the inventory
 bikeData.quantity -= orderData.quantity;
 if (bikeData.quantity === 0) {
     bikeData.inStock = false;
 }


    const result = await Order.create(orderData)
    return result;
 } catch (error) {
    console.log(error);
 }
  }
  

  export const OrderService ={
createOrder
  }