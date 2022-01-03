import Users, { encryptPassword } from './users.models';
import { connDB } from 'utils/mongoose'
import { NextApiRequest, NextApiResponse } from 'next';

connDB();

export const getUsers = async (res: NextApiResponse) => {
    try {
        
        const users = await Users.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }

}

export const getUserById = async (res: NextApiResponse, id: string ) => {
    try {
        const user = await Users.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }

}

export const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body: { name, username, email, password, avatar } } = req;
    
    try {
        
        const user = new Users({
            name, 
            username, 
            email, 
            password: await encryptPassword(password),
            avatar,
        });

        const savedUser = await user.save();

        res.status(201).json(savedUser);

    } catch (error) {
        res.status(400).json({ error: ( error as Error).message });
    }

}

export const updateUserById = async ( req: NextApiRequest, res: NextApiResponse, id: string) => {
    const { 
        body: { 
            name, 
            username, 
            email, 
            avatar, 
            password, 
            isActive, 
            google, 
            github, 
            twitch }
    } = req;
    try {
        const userUpdate = await Users.findByIdAndUpdate(
            id, 
            { 
                $set:{ 
                    name, 
                    username, 
                    email, 
                    avatar, 
                    password: password && await encryptPassword(password),
                    isActive,
                    google,
                    github,
                    twitch,
                } 
            }, {
                new: true,
                runValidators: true,
            })
        res.status(200).json(userUpdate);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }

}