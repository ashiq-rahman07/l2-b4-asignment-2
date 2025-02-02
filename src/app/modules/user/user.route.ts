import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidation.userRegisterValidationSchema),
  UserControllers.registerUserIntoDB,
);
router.get(
  '/',
  
  UserControllers.getAllUsers,
);



export const UserRoutes = router;
