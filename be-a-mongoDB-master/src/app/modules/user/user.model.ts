import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// Create a new Model type that knows about IUserMethods...
// type UserModel = Model<IUser, {}, IUserMethods>;


// creating schema using interface
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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
},
    // { minimize: false, timestamps: true, collection: 'Shops' }
);
/*
minimize option is used within a schema to control whether 
empty objects (objects with no properties) should be saved in the MongoDB documents or not. 
When minimize is set to false, Mongoose will store empty objects in the documents, 
while setting it to true (which is the default) will remove empty objects when saving.

collection: 
collection name as same as that

*/

userSchema.static('getAdminUsers', async function getAdminUsers(): Promise<IUser[]> {
    const admin = await this.find({ role: "admin" });
    return admin;
});

userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
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

const User = model<IUser, UserModel>("User", userSchema);

export default User;