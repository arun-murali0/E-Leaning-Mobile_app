import mongoose, { Schema } from 'mongoose';
import { Likes } from '../types/model-types/likes.types';

const likesSchema = new Schema<Likes>({
  userId: mongoose.Types.ObjectId,
  liked: Boolean,
});

export const likes = mongoose.model<Likes>('likes', likesSchema);
