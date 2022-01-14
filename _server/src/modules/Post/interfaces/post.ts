import { ObjectId } from 'mongodb';
import { Category } from 'src/modules/Category/interfaces/category';
import { User } from 'src/modules/User/interfaces/user';
import { Document, PaginateModel } from 'mongoose';
import { LocalizeString } from 'src/core/mongo/localize';

export interface Post extends Document {
  _id: ObjectId;
  slug: string; //reference type
  title: LocalizeString;
  content: LocalizeString;
  categories: Category['_id'][] | Category[];
  isArchived: Boolean; //reference type
  createdBy: User['_id'] | User;
}

export type PostModel = PaginateModel<Post>;
