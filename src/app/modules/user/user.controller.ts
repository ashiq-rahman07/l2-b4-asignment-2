import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import { User } from './user.model';

const registerUserIntoDB = catchAsync(async (req, res) => {
  const result = await UserServices.registerUserIntoDB(req.body);

  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: 201,
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsers();

  sendResponse(res, {
    success: true,
    message: 'User retrieve successfully',
    statusCode: 201,
    data: result,
  });
});

export const UserControllers = {
  registerUserIntoDB,
  getAllUsers,
};
