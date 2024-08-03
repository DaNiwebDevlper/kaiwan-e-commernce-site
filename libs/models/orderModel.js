import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    orderId: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
    },
    cartItems: {
        type: Array
    },
    totalPrice: {
        type: String

    },
    paymentMethod: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true
    }, address: {
        type: String,
        required: true
    }, note: {
        type: String
    }

},
);

const orderModel = mongoose.models.orders || mongoose.model('orders', orderSchema);

export default orderModel;
