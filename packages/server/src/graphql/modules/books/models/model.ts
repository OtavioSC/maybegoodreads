import mongoose, {Schema} from "mongoose";
import { ObjectId } from "mongodb";

export type Book = {
    _id: ObjectId
    title: string
    description: string
    author: string
    score: number
    image?: string
    createdAt: Date
}

const BookSchema = new Schema<Book>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: false,
        default: 0
    },
    image: String,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

export const BookModel = mongoose.model<Book>("Book", BookSchema)