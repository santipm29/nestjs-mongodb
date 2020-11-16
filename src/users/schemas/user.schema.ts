import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    document: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    age: { type: Number, required: true },
    email: {type: String, required: true },
    phone: {type: String, required: false },
    address: { type: String, required: false }
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
    versionKey: false
  }
);
