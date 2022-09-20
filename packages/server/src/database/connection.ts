import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

export async function connection() {
    mongoose.connection.once('open', () => {
        console.log('Success database connection!')
    })

    await mongoose.connect(`${process.env.DATABASE_URL}`)
}

export async function disconnect(){
    await mongoose.connection.close();
}