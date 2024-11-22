import { Model } from "mongoose";

export type TOrder = {
    email: string;
    product: string;
    quantity: number;
    totalPrice: number;
  };



  export type OrderModel = Model<TOrder, Record<string, unknown>>;