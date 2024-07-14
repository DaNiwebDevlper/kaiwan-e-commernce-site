import mongoose from "mongoose";
// mongodb+srv://danish:92117172@cluster0.qlbf62u.mongodb.net/e-commernce?retryWrites=true&w=majority&appName=Cluster0

export const connectDB = async () => {
    if (mongoose.connection.readyState == 1) {
        return mongoose.connection.asPromise()
    }
    return (await mongoose.connect("mongodb+srv://danish:92117172@cluster0.qlbf62u.mongodb.net/e-commernce"))
}
connectDB()