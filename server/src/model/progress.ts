import mongoose, { Schema } from 'mongoose';
import { IProgress } from '../types/user.types';

const progressSchema: Schema = new Schema<IProgress>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  watchedVideos: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
  lastWatched: { type: Schema.Types.ObjectId, ref: 'Video' },
  lastAccessed: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const progress = mongoose.model<IProgress>('progress', progressSchema);
