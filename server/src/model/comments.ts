import mongoose, { Schema } from 'mongoose';
import { IComment } from '../types/user.types';

const commentSchema: Schema = new Schema<IComment>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const comments = mongoose.model<IComment>('comments', commentSchema);
