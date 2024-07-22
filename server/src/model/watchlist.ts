import mongoose, { Schema } from 'mongoose';
import { watchList } from '../types/model-types/watchlist.types';

const watchListSchema = new Schema<watchList>({
  userId: mongoose.Types.ObjectId,
  watchlist: Array,
});

export const watchlist = mongoose.model<watchList>(
  'watchlist',
  watchListSchema
);
