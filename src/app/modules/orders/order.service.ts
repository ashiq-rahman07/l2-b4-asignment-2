import { Bike } from "../products/bike.model";
import { CreateOrderResponse, TOrder } from "./order.interface";

import { Order } from "./order.model";



const createOrder = async (orderData:TOrder): Promise<CreateOrderResponse>=> {
  const { email, product, quantity, totalPrice, } = orderData;

    // Find the product
    const bike = await Bike.findById(product);
    if (!bike) {
      return { success: false, message: "bike not found" };
    }

    // Check stock availability
    if (bike.quantity < quantity) {
      return { success: false, message: "Insufficient stock available." };
    }

    // Calculate total price
    // const totalPrice = bike.price * quantity;

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

  const getAllOrders = async()=>{
    const result = await Order.find();
    return result;
  }

  export const OrderService ={
createOrder,
getAllOrders 
  }