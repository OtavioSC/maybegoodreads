import app from './server'
import dotenv from 'dotenv'
import { connection } from './database/connection'
import {generateSaltAndHash} from './helpers/authentication'

dotenv.config()
// change to env variable

app.listen(process.env.PORT, async () => {
    await connection();
    console.log('Server is running')
})