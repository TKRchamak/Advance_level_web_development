import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // res.send('Hello World!');
    // next();

    // inserting a test data into mongodb
    /*
        step 1: Interface,
        step 2: Schema
        step 3: Model,
        step 4: Database Query
    */

    // creating an interface
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    }

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

    async function run() {
        const user = new User({
            id: "777",
            role: "student",
            password: "jakanaka",
            name: {
                firstName: "Tonmoy",
                middleName: "Kumar",
                lastName: "Roy",
            },
            dateOfBirth: "",
            gender: "male",
            email: "tonmoykumarroy6@gmail.com",
            contactNo: "01772536411",
            emergencyContactNo: "0158968484",
            presentAddress: "Dhaka",
            permanentAddress: "Dhaka",
        });
        await user.save();

        console.log(user); // 'bill@initech.com'
    }
    run();

})

export default app;