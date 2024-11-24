import { Model } from 'mongoose';

export type CreateOrderResponse =
  | { success: false; message: string }
  | { success: true; data: TOrder };

export type TOrder = {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
};

export type OrderModel = Model<TOrder, Record<string, unknown>>;
