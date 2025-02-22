import { z } from 'zod';

const userRegisterValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    role: z.enum(['admin', 'customer']).default('customer').optional(),
    isActive: z.boolean().default(true).optional(),
    phone: z.string().optional().optional(),
    address: z.string().optional(),
  }),
});
const userUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').optional(),
    email: z.string().email('Invalid email address').optional(),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .optional(),
    role: z.enum(['admin', 'customer']).default('customer').optional(),
    isActive: z.boolean().default(true).optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
  }),
});

export const UserValidation = {
  userRegisterValidationSchema,
  userUpdateValidationSchema,
};
