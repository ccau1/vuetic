import {Document, PaginateModel} from 'mongoose';

export interface Todo extends Document {
  text: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type TodoModel = PaginateModel<Todo>;
