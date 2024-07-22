/* This TypeScript code snippet is defining a Mongoose schema for a user in a Node.js application. */

import mongoose, { Schema } from 'mongoose';
import { Iuser } from '../types/model-types/user.types';

const userSchema: Schema = new Schema<Iuser>(
  {
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
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: Boolean,
    subscribed: Boolean,
    content: {
      type: mongoose.Types.ObjectId,
      ref: 'content',
    },
    comments: {
      type: mongoose.Types.ObjectId,
      ref: 'comments',
    },
    watchlist: {
      type: mongoose.Types.ObjectId,
      ref: 'watchlist',
    },
    likes: {
      type: mongoose.Types.ObjectId,
      ref: 'likes',
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<Iuser>('user', userSchema);
