import { Request, Response } from 'express';
import { User } from '../../model/user';
import { CustomError } from '../../middleware/errorHandler';
import { tryCatch } from '../../middleware/tryCatch';
import { comparePassword } from '../../utils/passwordHash';
// import { SET_DATA, GET_DATA } from '../../config/database';

export const userLogin = tryCatch(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email }).exec();
  res.status(200).json({ response: 'success', message: 'login successfull' });
});
