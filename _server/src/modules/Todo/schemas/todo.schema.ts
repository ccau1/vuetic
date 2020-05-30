import mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  {
    collection: 'Todos',
    timestamps: true,
  },
);
