import mongoose, { Schema } from 'mongoose';

export interface Iuser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

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
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model<Iuser>('user', userSchema);
