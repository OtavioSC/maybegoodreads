import mongoose, { Schema } from 'mongoose'

export type IBook = {
  _id: mongoose.Types.ObjectId
  title: string
  description: string
  score: number
  createdAt: Date
}

const schema = new Schema<IBook>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: false,
  },
})

schema.index({
  title: 'text',
  description: 'text'
})

export const BookModel = mongoose.model<IBook>('book', schema)