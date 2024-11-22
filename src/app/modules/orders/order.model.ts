import mongoose, { model } from "mongoose";
import { OrderModel, TOrder } from "./order.interface";


const orderSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  }, { timestamps: true ,
    toJSON: {
        virtuals: true,
    },
  });
  
export  const Order = model<TOrder,OrderModel>('Order', orderSchema);