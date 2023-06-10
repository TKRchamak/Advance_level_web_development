import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// creating schema using interface
const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true, unique: false },
    password: { type: String, required: true, unique: false },
    name: {
        firstName: { type: String, required: true, unique: false },
        middleName: { type: String, required: false, unique: false },
        lastName: { type: String, required: true, unique: false },
    },
    dateOfBirth: { type: String, required: false, unique: false },
    gender: { type: String, enum: ["male", "female"], required: true, unique: false },
    email: { type: String, required: true, unique: false },
    contactNo: { type: String, required: true, unique: false },
    emergencyContactNo: { type: String, required: true, unique: false },
    presentAddress: { type: String, required: true, unique: false },
    permanentAddress: { type: String, required: true, unique: false },
});

const User = model<IUser>("User", userSchema);

export default User;