import mongoose, { Schema } from 'mongoose';
import { ICourse } from '../types/user.types';

const coarseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  subscriptionLevel: {
    type: String,
    enum: ['free', 'paid'],
    required: true,
  },
  enrolledStudents: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  videos: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const coarse = mongoose.model<ICourse>('coarse', coarseSchema);
