import mongoose, { Schema } from 'mongoose';
import { comments } from './comments';
import { IVideo } from '../types/user.types';

const videoSchema: Schema = new Schema<IVideo>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  uploadedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  fileUrl: { type: String, required: true },
  duration: { type: Number, required: true },
  comments: [comments],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const videos = mongoose.model<IVideo>('videos', videoSchema);
