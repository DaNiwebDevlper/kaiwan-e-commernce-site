import mongoose, { Schema } from "mongoose";

const orderIdSchema = new Schema({
    orderIdCounter: {
        type: String,
        required: true
    },
    timestamps: true
})

const orderIdModel = mongoose.models.orderId || mongoose.model('orderId', orderIdSchema)

export default orderIdModel