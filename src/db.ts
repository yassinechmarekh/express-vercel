import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
    } catch (error) {
        console.log("Database connection is failed");
        process.exit(1);
    }
};

export default connectToDB;