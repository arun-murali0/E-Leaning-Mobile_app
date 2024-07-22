/* This TypeScript code snippet is defining a function called `createNewUser` that handles the creation
of a new user in an Express application. Here is a breakdown of what each import and part of the
code is doing: */
import { NextFunction, Request, Response } from 'express';
import { User } from '../../model/user';
import { tryCatch } from '../../middleware/tryCatch';
import { hashingPassword } from '../../utils/bcrypt-hash/passwordHash';
import { CustomError } from '../../middleware/errorHandler';

/* This code snippet is defining a function named `createNewUser` that is exported as a constant. The
function is using the `tryCatch` middleware to handle any errors that might occur during its
execution. */
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