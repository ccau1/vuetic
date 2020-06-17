import LocalizeStringSchema from '../../../core/mongo/localize.schema';
import { SchemaTypes } from 'mongoose';
import mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema(
  {
    name: LocalizeStringSchema, //any languages
    parent: { type: SchemaTypes.ObjectId, ref: 'Categories' },
    ancestors: [{ type: SchemaTypes.ObjectId, ref: 'Categories' }],
    createdBy: [{ type: SchemaTypes.ObjectId, ref: 'Users' }],
  },
  {
    collection: 'Categories',
    timestamps: true,
  },
);
