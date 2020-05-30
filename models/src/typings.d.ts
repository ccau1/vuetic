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
