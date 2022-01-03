import { NextApiRequest, NextApiResponse } from 'next'
import { getUsers, createUser } from './users.controllers';

const users = async (
   req: NextApiRequest,
   res: NextApiResponse
) => {
    const { method } = req;
    
    switch( method ) {
        case 'GET':
            return getUsers(res);
        case 'POST':
            return createUser(req, res);
        default:
            return res.status(400).json({msg: 'method is not supported'});
    };
}
export default users;