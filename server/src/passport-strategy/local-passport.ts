/* This code snippet is setting up authentication using Passport.js with a local strategy in a
TypeScript environment. Here's a breakdown of what each part of the code is doing: */
import { Request } from 'express';
import passport, { DoneCallback } from 'passport';
import { Strategy } from 'passport-local';
import { CustomError } from '../middleware/errorHandler';
import { User } from '../model/user';
import { comparePassword } from '../utils/passwordHash';

interface userType {
  _id?: string;
}


passport.serializeUser((user: userType, done: DoneCallback) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done: DoneCallback) => {
  try {
    const user = await User.findOne({ _id: id });
    if (!user) throw new CustomError('Unauthorized', 401);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

/* This part of the code snippet is defining a local strategy for Passport.js authentication. Here's a
breakdown of what it's doing: */
passport.use(
  new Strategy(
    {
      passwordField: 'password',
      usernameField: 'email',
      passReqToCallback: true,
    },
    async (req: Request, email: string, password: string, done: any) => {
      try {
        const user = await User.findOne({ email: email });
        if (!user) throw new CustomError('user Not Found', 400);
        const passwordHash = comparePassword(password, user.password);
        if (!passwordHash)
          throw new CustomError('please check the password', 400);
        done(null, user);
      } catch (error: any) {
        done(error, null);
      }
    }
  )
);
