import mongoose from "mongoose";

export const connectDB = async () => {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection;
    }
    await mongoose.connect(process.env.MONGODB_URI);
    return mongoose.connection;
};
