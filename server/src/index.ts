import express from 'express';
import { db } from './db/index';
import { PORT, SECRET } from './constants';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';
import Routes from './routes/index';
import helmet from 'helmet';
import morgan from 'morgan';
import { morgonLogFormat } from './utils/morganLog';
import { errorHandler, CustomError } from './middleware/errorHandler';

const app = express();
const morganFormat = ':method :url :status :response-time ms';

// middleware
app.use(morgan(morganFormat, morgonLogFormat));
app.use(
  cors({
    credentials: true,
  })
);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(SECRET));
app.use(
  session({
    secret: SECRET || 'fhnjkdfh',
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60,
      httpOnly: true,
    },
  })
);

// passport initiliase
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', Routes);

// database

// const DB = async () => {
//   await db();
//   await initialiseRedisConnection();
// };

db()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running in http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    throw new CustomError(err.message, err.statusCode);
  });

// error handler
app.use(errorHandler);
