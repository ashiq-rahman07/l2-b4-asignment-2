import { TUser } from './user.interface';
import { User } from './user.model';

const registerUserIntoDB = async (payload: TUser) => {
  const newUser = User.create(payload);
  return newUser;
};

const getAllUsers = async () => {
  const result = User.find();
  return result;
};

export const UserServices = {
  registerUserIntoDB,
  getAllUsers,
};
