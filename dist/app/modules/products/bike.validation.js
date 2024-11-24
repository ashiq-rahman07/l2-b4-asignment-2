"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define the BikeCategory enum
const bikeCategoryEnum = zod_1.z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']);
// Define the Zod schema
const bikeValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: 'Name is required and cannot be empty' }),
    brand: zod_1.z
        .string()
        .min(1, { message: 'Brand is required and cannot be empty' }),
    price: zod_1.z.number().min(0, { message: 'Price must be a positive number' }),
    category: bikeCategoryEnum,
    description: zod_1.z
        .string()
        .min(1, { message: 'Description is required and cannot be empty' }),
    quantity: zod_1.z
        .number()
        .int({ message: 'Quantity must be an integer' })
        .min(0, { message: 'Quantity cannot be negative' }),
    inStock: zod_1.z.boolean({ required_error: 'InStock status is required' }),
});
exports.default = bikeValidationSchema;
