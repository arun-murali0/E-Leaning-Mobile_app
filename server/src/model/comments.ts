import mongoose, { Schema } from 'mongoose';

const commentsSchema = new Schema({
  userId: mongoose.Types.ObjectId,
  comments: String,
});

export const comments = mongoose.model('comments', commentsSchema);
