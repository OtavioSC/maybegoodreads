import mongoose, { Schema } from 'mongoose'
import { ObjectId } from "mongodb";

export type Review = {
  _id: ObjectId
  score: string
  user: string
  book: string
  createdAt: Date
}

const ReviewSchema = new Schema<Review>({
  score: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true,
  },
  book: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  }
})

ReviewSchema.index({
  score: 'text',
})

export const ReviewModel = mongoose.model<Review>('review', ReviewSchema)