import mongoose from "mongoose";
import app from "./app"

const port = 5000;

// database connection
async function databaseConnection() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log("database connect successfully");
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.log("not possible to connect");
    }
}
databaseConnection();
