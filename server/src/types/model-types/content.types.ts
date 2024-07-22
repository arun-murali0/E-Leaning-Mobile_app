export interface Content {
  userId: string;
  videoTitle: string;
  videoUrl: string;
  videoComments?: object;
  isAdmin?: boolean | undefined;
  subscribed?: boolean | undefined;
}
