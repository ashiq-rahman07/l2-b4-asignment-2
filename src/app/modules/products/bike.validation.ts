import { z } from 'zod';

// Define the BikeCategory enum
const bikeCategoryEnum = z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']);
const bikeBrandEnum = z.enum([
  'Yamaha',
  'Honda',
  'Suzuki',
  'Hero',
  'Tvs',
  'Bajaj',
]);
// Define the Zod schema
const bikeValidationCreateSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, { message: 'Name is required and cannot be empty' }),
    brand: bikeBrandEnum,
    model: z
      .string()
      .min(1, { message: 'model is required and cannot be empty' }),
    price: z.number().min(0, { message: 'Price must be a positive number' }),
    category: bikeCategoryEnum,
    description: z
      .string()
      .min(1, { message: 'Description is required and cannot be empty' }),
    quantity: z
      .number()
      .int({ message: 'Quantity must be an integer' })
      .min(0, { message: 'Quantity cannot be negative' }),
    bikeImg: z.string(),
    inStock: z
      .boolean({ required_error: 'InStock status is required' })
      .default(true),
  }),
});

const bikeValidationUpdateSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, { message: 'Name is required and cannot be empty' })
      .optional(),
    brand: bikeBrandEnum.optional(),
    model: z
      .string()
      .min(1, { message: 'Model is required and cannot be empty' })
      .optional(),
    price: z
      .number()
      .min(0, { message: 'Price must be a positive number' })
      .optional(),
    category: bikeCategoryEnum.optional(),
    description: z
      .string()
      .min(1, { message: 'Description is required and cannot be empty' })
      .optional(),
    quantity: z
      .number()
      .int({ message: 'Quantity must be an integer' })
      .min(0, { message: 'Quantity cannot be negative' })
      .optional(),
    bikeImg: z.string().optional(),
    inStock: z
      .boolean({ required_error: 'InStock status is required' })
      .optional(),
  }),
});

export const bikeValidation = {
  bikeValidationCreateSchema,
  bikeValidationUpdateSchema,
};
