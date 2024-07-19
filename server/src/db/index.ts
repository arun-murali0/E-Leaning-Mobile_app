import mongoose from 'mongoose';
import { MONGO_URL, REDIS_SECRET, REDIS_URL, DB_NAME } from '../constants';
import { createClient } from 'redis';
import { promisify } from 'util';

// mongoDb
const db = async () => {
  try {
    if (!MONGO_URL) throw new Error('error');
    await mongoose.connect(`${MONGO_URL}/${DB_NAME}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// Redis
const client = createClient({
  password: REDIS_SECRET,
  socket: {
    host: REDIS_URL,
    port: 14722,
  },
});

client.on('error', () => {
  console.log('caching error');
});

client.on('connect', () => {
  console.log('redis connected');
});

const GET_DATA = promisify(client.get).bind(client);
const SET_DATA = promisify(client.set).bind(client);

export { db, client, GET_DATA, SET_DATA };
