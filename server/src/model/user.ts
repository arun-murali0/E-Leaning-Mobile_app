import mongoose, { Schema } from 'mongoose';

import { Iuser } from '../types/user.types';

const userSchema: Schema = new Schema<Iuser>({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'student'],
    default: 'student',
  },
  subscriptionStatus: {
    type: String,
    enum: ['free', 'paid'],
    default: 'free',
  },
  enrolledCoarse: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'coarse',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const user = mongoose.model<Iuser>('user', userSchema);
