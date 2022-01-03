import { NextApiRequest, NextApiResponse } from "next";
import { getUserById, updateUserById } from './users.controllers';
const users =  async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { method, query: { id } } = req;

    switch( method ) {
        case 'GET':
            return getUserById(res, id as string);
        case 'PATCH':
            return updateUserById(req, res, id as string)
        default:
            return res.status(400).json({msg: 'method is not supported'});
    }
}
export default users;