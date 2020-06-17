import LocalizeStringSchema from '../../../core/mongo/localize.schema';
import { Schema, SchemaTypes } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export const PostSchema = new Schema(
  {
    slug: { type: String, unique: true, required: true },
    title: LocalizeStringSchema,
    content: LocalizeStringSchema,
    categories: [{ type: SchemaTypes.ObjectId, ref: 'Categories' }],
    isArchived: { type: Boolean, default: false },
    createdBy: { type: SchemaTypes.ObjectId, required: true, ref: 'Users' },
  },
  {
    collection: 'Posts',
    timestamps: true,
  },
);

PostSchema.plugin(mongoosePaginate);
