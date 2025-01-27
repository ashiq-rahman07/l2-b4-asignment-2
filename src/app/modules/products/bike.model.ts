import { model, Schema } from 'mongoose';
import { BikeModel, TBike } from './bike.interface';

const bikeSchema = new Schema<TBike, BikeModel>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    model: { type: String, required: true },
    category: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
      required: true,
    },
    description: { type: String, required: true },
    bikeImg:{ type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

// Add a static method to the schema
//   bikeSchema.statics.BikedExists = async function (id: string): Promise<TBike | null> {
//     return await this.findById(id);
//   };

// Create the model
export const Bike = model<TBike, BikeModel>('Bike', bikeSchema);

//   export default Bike;
