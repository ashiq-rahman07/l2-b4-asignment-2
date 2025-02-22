"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeValidation = void 0;
const zod_1 = require("zod");
// Define the BikeCategory enum
const bikeCategoryEnum = zod_1.z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']);
const bikeBrandEnum = zod_1.z.enum([
    'Yamaha',
    'Honda',
    'Suzuki',
    'Hero',
    'Tvs',
    'Bajaj',
]);
// Define the Zod schema
const bikeValidationCreateSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(1, { message: 'Name is required and cannot be empty' }),
        brand: bikeBrandEnum,
        model: zod_1.z
            .string()
            .min(1, { message: 'model is required and cannot be empty' }),
        price: zod_1.z.number().min(0, { message: 'Price must be a positive number' }),
        category: bikeCategoryEnum,
        description: zod_1.z
            .string()
            .min(1, { message: 'Description is required and cannot be empty' }),
        quantity: zod_1.z
            .number()
            .int({ message: 'Quantity must be an integer' })
            .min(0, { message: 'Quantity cannot be negative' }),
        bikeImg: zod_1.z.string(),
        inStock: zod_1.z
            .boolean({ required_error: 'InStock status is required' })
            .default(true),
    }),
});
const bikeValidationUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(1, { message: 'Name is required and cannot be empty' })
            .optional(),
        brand: bikeBrandEnum.optional(),
        model: zod_1.z
            .string()
            .min(1, { message: 'Model is required and cannot be empty' })
            .optional(),
        price: zod_1.z
            .number()
            .min(0, { message: 'Price must be a positive number' })
            .optional(),
        category: bikeCategoryEnum.optional(),
        description: zod_1.z
            .string()
            .min(1, { message: 'Description is required and cannot be empty' })
            .optional(),
        quantity: zod_1.z
            .number()
            .int({ message: 'Quantity must be an integer' })
            .min(0, { message: 'Quantity cannot be negative' })
            .optional(),
        bikeImg: zod_1.z.string().optional(),
        inStock: zod_1.z
            .boolean({ required_error: 'InStock status is required' })
            .optional(),
    }),
});
exports.bikeValidation = {
    bikeValidationCreateSchema,
    bikeValidationUpdateSchema,
};
