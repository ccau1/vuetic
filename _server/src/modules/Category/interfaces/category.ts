import { Document, PaginateModel } from 'mongoose';
import { ObjectId } from 'mongodb';
import { User } from 'src/modules/User/interfaces/user';

export interface Category extends Document {
  _id: ObjectId;
  name: string;
  parent: Category['_id'] | Category;
  ancestors: Array<Category['_id'] | Category>;
  createdBy: User['_id'] | User;
}

export type CategoryModel = PaginateModel<Category>;
