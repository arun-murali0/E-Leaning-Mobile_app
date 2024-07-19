import { NextFunction, Request, Response } from 'express';
import { User } from '../../model/user';
import { tryCatch } from '../../middleware/tryCatch';
import { hashingPassword } from '../../utils/passwordHash';
import { CustomError } from '../../middleware/errorHandler';

export const createNewUser = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    let userData = req.body;
    userData.password = hashingPassword(userData.password);
    if (userData.email) throw new CustomError('Already Registered', 400);

    const newUser = await User.create(userData);
    res.status(200).json({
      response: 'success',
      message: 'Registration successfull',
    });
  }
);
