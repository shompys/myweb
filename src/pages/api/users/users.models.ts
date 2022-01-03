import { Schema, model, models } from 'mongoose';
import bcrypt from 'bcryptjs';
interface User {
    name: string;
    username: string;
    email: string;
    password: string;
    avatar?: string;
    google: boolean;
    github: boolean;
    twitch: boolean;
    isActive: boolean;
}

const schema = new Schema<User>({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true,
        maxlength: [20, 'name max 20 characters'],
    },
    username: {
        type: String,
        required: [true, 'username is required'],
        trim: true,
        maxlength: [20, 'username max 20 characters'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        trim: true,
        maxlength: [50, 'email max 50 characters'],
        unique: true,
    },
    password: {
        type: String,
    },
    avatar: {
        type: String,
        trim: true,
        default: null,
    },
    google: {
        type: Boolean,
        default: false,
    },
    github: {
        type: Boolean,
        default: false,
    },
    twitch: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true,
    versionKey: false,
});

export const encryptPassword = async (password: string) => {

    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
    
}

export const comparePassword = async (password: string, receivedPassword: string) => 
    await bcrypt.compare(password, receivedPassword);

export default models.User || model<User>('User', schema);