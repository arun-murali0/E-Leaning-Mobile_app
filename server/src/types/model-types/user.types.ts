// user types
export interface Iuser {
  _id?: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isAdmin: boolean;
  subscribed: boolean;
  content: object;
  comments: object;
  watchlist: object;
  likes: object;
}
