/* The code snippet you provided is a TypeScript function for handling user login using Express framework. Here is a breakdown of the imports and the function: */
import { Request, Response } from 'express';
import { User } from '../../model/user';
import { tryCatch } from '../../middleware/tryCatch';
import { CustomError } from '../../middleware/errorHandler';
// import { SET_VALUE } from '../../db';

export const userLogin = tryCatch(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email }).exec();

  if (!user) throw new CustomError('user Not Found', 400);

  // await SET_VALUE(user, email);

  res.status(200).json({ response: 'success', message: 'login successfull' });
});
