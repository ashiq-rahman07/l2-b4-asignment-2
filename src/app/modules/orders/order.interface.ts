import { Model, Types } from 'mongoose';

export type CreateOrderResponse =
  | { success: false; message: string }
  | { success: true; data: TOrder };

export type TOrder = {
  user: Types.ObjectId;
  product: Types.ObjectId;
  quantity: number;
  totalPrice: number;
};

export type OrderModel = Model<TOrder, Record<string, unknown>>;
