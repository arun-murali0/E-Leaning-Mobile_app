import mongoose, { Schema } from 'mongoose';
import { Content } from '../types/model-types/content.types';

const contentSchema: Schema = new Schema<Content>({
  userId: mongoose.Types.ObjectId,
  videoTitle: String,
  videoUrl: String,
  isAdmin: Boolean,
  subscribed: Boolean,
  videoComments: {
    type: mongoose.Types.ObjectId,
    ref: 'comments',
  },
});

export const content = mongoose.model<Content>('content', contentSchema);
