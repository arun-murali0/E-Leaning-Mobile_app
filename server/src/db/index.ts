/**
 * The code snippet sets up connections to MongoDB and Redis, with error handling and promisified Redis
 * commands.
 */
import mongoose from 'mongoose';
import { MONGO_URL, REDIS_SECRET, REDIS_URL, DB_NAME } from '../constants';
import { createClient } from 'redis';
import { CustomError } from '../middleware/errorHandler';

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

// let client: any;
// // Redis
// client = createClient({
//   password: REDIS_SECRET,
//   socket: {
//     host: REDIS_URL,
//     port: 14722,
//   },
// });

// const initialiseRedisConnection = async () => {
//   if (!client) {
//     client.on('error', () => {
//       console.log('error in connection');
//     });
//     try {
//       await client.connect();
//       console.log('redis connected');
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };

// const GET_VALUE = async (key: any) => {
//   try {
//     const value = await client.get(key);
//     return value;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const SET_VALUE = async (key: any, value: any) => {
//   try {
//     const Value = await client.set(`${key}:${value}`);
//     return Value;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export { db, initialiseRedisConnection, SET_VALUE, GET_VALUE };

export { db };
