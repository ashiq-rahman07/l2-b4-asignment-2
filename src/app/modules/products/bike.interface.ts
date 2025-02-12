import { Model } from 'mongoose';

export type TBike = {
  name: string;
  brand: string;
  model: string;
  price: number;
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric';
  description: string;
  bikeImg: string;
  quantity: number;
  inStock: boolean;
};

export type BikeModel = Model<TBike, Record<string, unknown>>;
