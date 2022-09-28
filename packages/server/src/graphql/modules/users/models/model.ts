import mongoose, { Schema } from 'mongoose'
import { ObjectId } from "mongodb";

export type User = {
  _id: ObjectId
  name: string
  email: string
  username: string
  password: string
  createdAt: Date
}

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  }
})

UserSchema.index({
  fullName: 'text',
  email: 'text'
})

export const UserModel = mongoose.model<User>('user', UserSchema)