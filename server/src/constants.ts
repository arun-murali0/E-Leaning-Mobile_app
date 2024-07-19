import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3030;
const MONGO_URL = process.env.MONGO_STRING;
const REDIS_URL = process.env.REDIS_PUBLIC_HOST;
const REDIS_SECRET = process.env.REDIS_SECRET;
const SECRET = process.env.SECRET;
const DB_NAME = 'E-LearningApplication';

export { PORT, MONGO_URL, REDIS_SECRET, REDIS_URL, SECRET, DB_NAME };
