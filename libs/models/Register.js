import mongoose, { Schema } from "mongoose";

const registerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const registerModel = mongoose.models.register || mongoose.model('register', registerSchema)

export default registerModel