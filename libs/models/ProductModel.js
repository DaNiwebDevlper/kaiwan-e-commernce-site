import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productDetail: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    productQuantity: {
        type: String,
        required: true
    },
    fileKey: {
        type: String,
    },
    featured: {
        type: Boolean,
        default: false,
    }, productDiscountPrice: {
        type: String,

    }
});

const ProductModel = mongoose.models.products || mongoose.model('products', ProductSchema);

export default ProductModel;
