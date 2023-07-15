// database logic

import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (userData: IUser): Promise<IUser> => {
    const user = new User(userData);
    await user.save();

    console.log(user.fullName());
    return user;
}

export const getUsersFromDB = async (): Promise<IUser[] | string> => {
    try {
        let users = await User.find();
        return users;
    } catch (err) {
        console.error(err);
        return err;
    }
}

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null | string> => {
    try {
        // const user = await User.findOne({ id: payload }); // send all data
        const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 }); // return only name and contact no
        return user;
    } catch (err) {
        // console.error(err); 
        return err;
    }
}

export const getAdminFromDB = async () => {
    try {
        // const user = await User.findOne({ id: payload }); // send all data
        const admins = await User.getAdminUsers();
        return admins;
    } catch (err) {
        // console.error(err); 
        return err;
    }
}