import { Model } from 'mongoose';

// Yamaha · Honda · Suzuki · Hero · Tvs · Bajaj · Lifan ·
export type TBike = {
  name: string;
  brand: 'Yamaha' | 'Honda' | 'Suzuki' | 'Hero' | 'Tvs' | 'Bajaj';
  model: string;
  price: number;
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric';
  description: string;
  bikeImg: string;
  quantity: number;
  inStock: boolean;
};

export type BikeModel = Model<TBike, Record<string, unknown>>;
