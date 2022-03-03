import jwt, { Secret } from 'jsonwebtoken';
import { NextApiRequest } from 'next';

const { JWT_SECRET } = process.env;

interface UserJWT {
    _id: string;
    name: string;
    username: string;
    email: string;
};

export const signToken = (user: UserJWT) => {
    
    return jwt.sign( user, JWT_SECRET as Secret, {
        expiresIn: 86400 * 30,
    });

};

export const verifyToken = (
    req: NextApiRequest 
) => {
    const token = req.headers['authorization'] || '';

    if(!token.toLowerCase().startsWith('bearer ')) return new Error('No token Provided')

    return jwt.verify(token, JWT_SECRET as Secret);

}