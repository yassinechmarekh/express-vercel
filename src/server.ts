import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectToDB from "./db";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

connectToDB();

mongoose.connection.once("open", () => {
    console.log("Database connection is successful");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
