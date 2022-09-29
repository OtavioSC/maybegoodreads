import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../graphql/modules/users/models/model'

dotenv.config()

const round = parseInt(process.env.SALT!);
const jwt = process.env.JWT;

export const gerenateToken = (user: User) =>
  sign(
    { id: user._id },
    jwt!, 
    { expiresIn: '30m' });

export const generateSaltAndHash = (password: string) => {
    const salt = bcrypt.genSaltSync(round);
    return bcrypt.hashSync(password, salt);
}

export const compareHashSync = async (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
}


