/**
 * The code snippet sets up connections to MongoDB and Redis, with error handling and promisified Redis
 * commands.
 */
import mongoose from 'mongoose';
import {
  MONGO_URL,
  REDIS_SECRET,
  REDIS_URL,
  REDIS_PORT,
  DB_NAME,
} from '../constants';
import { createClient } from 'redis';
import { CustomError } from '../middleware/errorHandler';

// redis
let redisClient;
const redisUrl = `redis://:${REDIS_SECRET}@${REDIS_URL}:${REDIS_PORT}`;

(async () => {
  redisClient = createClient({ url: redisUrl });
  redisClient.on('error', () => {
    throw new CustomError('redisDB error', 400);
  });
  await redisClient.connect();
})();

// mongoDb
const db = async () => {
  try {
    if (!MONGO_URL) throw new CustomError('database error', 500);
    await mongoose.connect(`${MONGO_URL}/${DB_NAME}`);
  } catch (error: any) {
    throw new CustomError(error.message, error.statusCode);
    process.exit(1);
  }
};

export { db, redisClient };
