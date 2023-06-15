// database logic

import User from "./user.model";

export const createUserToDB = async () => {
    const user = new User({
        id: "778",
        role: "student",
        password: "jakanaka",
        name: {
            firstName: "Suparna",
            middleName: "Rani",
            lastName: "Debnath",
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
    return user;
}

export const getUsersFromDB = async () => {
    let users = await User.find();
    return users;
}