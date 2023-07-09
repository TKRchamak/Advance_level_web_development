import mongoose from "mongoose";
import app from "./app"

const port: number = 5000;

// database connection
async function databaseConnection() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log("database connect successfully");
        app.listen(port, () => {
            console.log(`Server is listening on port ${port} \nopen with http://localhost:5000/ or http://127.0.0.1:5000/`)
        })
    } catch (error) {
        console.log("not possible to connect");
        console.error(error);
    }
}
databaseConnection();
