export interface Todo {
  _id: string;
  text: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  expiresOn: number;
}

export interface User {
  _id: string;
  email: string;
  username: string;
}

//added "?" as create post not need
export interface Post {
  slug?: string;
  title: { [key: string]: string };
  content: { [key: string]: string };
  categories?: [string];
  isArchived?: boolean;
  createdBy?: string;
}

export interface PostSearch {
}
