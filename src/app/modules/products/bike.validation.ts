import { z } from 'zod';

// Define the BikeCategory enum
const bikeCategoryEnum = z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']);

// Define the Zod schema
const bikeValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required and cannot be empty' }),
  brand: z
    .string()
    .min(1, { message: 'Brand is required and cannot be empty' }),
  price: z.number().min(0, { message: 'Price must be a positive number' }),
  category: bikeCategoryEnum,
  description: z
    .string()
    .min(1, { message: 'Description is required and cannot be empty' }),
  quantity: z
    .number()
    .int({ message: 'Quantity must be an integer' })
    .min(0, { message: 'Quantity cannot be negative' }),
  inStock: z.boolean({ required_error: 'InStock status is required' }),
});

export default bikeValidationSchema;
