import mongoose from 'mongoose';

// user schema
interface Iuser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: 'student' | 'admin';
  subscriptionStatus: 'free' | 'paid';
  enrolledCoarse: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

// coarse schema
interface ICourse {
  title: string;
  description: string;
  price: number;
  subscriptionLevel: 'free' | 'paid';
  enrolledStudents: mongoose.Types.ObjectId[];
  videos: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

// video
interface IVideo {
  title: string;
  description: string;
  course: mongoose.Types.ObjectId;
  uploadedBy: mongoose.Types.ObjectId;
  fileUrl: string;
  duration: number;
  order: number;
  comments: IComment[];
  createdAt: Date;
  updatedAt: Date;
}
// comments
interface IComment {
  user: mongoose.Types.ObjectId;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
// progress
interface IProgress {
  user: mongoose.Types.ObjectId;
  course: mongoose.Types.ObjectId;
  watchedVideos: mongoose.Types.ObjectId[];
  lastWatched: mongoose.Types.ObjectId;
  lastAccessed: Date;
  createdAt: Date;
  updatedAt: Date;
}

export { Iuser, IComment, ICourse, IProgress, IVideo };
