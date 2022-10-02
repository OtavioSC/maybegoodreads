import mongoose, {Schema} from "mongoose";
import { ObjectId } from "mongodb";

export type Feed = {
   _id: ObjectId
   user: string
   title: string
   description: string
   createdAt: Date
}

const FeedSchema = new Schema<Feed>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

export const FeedModel = mongoose.model<Feed>("Feed", FeedSchema)