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

// user data look like this --->
// const user = awiat new User({
//     id: "778",
//     role: "student",
//     password: "jakanaka",
//     name: {
//         firstName: "Suparna",
//         middleName: "Rani",
//         lastName: "Debnath",
//     },
//     dateOfBirth: "",
//     gender: "male",
//     email: "tonmoykumarroy6@gmail.com",
//     contactNo: "01772536411",
//     emergencyContactNo: "0158968484",
//     presentAddress: "Dhaka",
//     permanentAddress: "Dhaka",
// });

const User = model<IUser>("User", userSchema);

export default User;