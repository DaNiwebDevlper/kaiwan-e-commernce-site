// src/app/api/add_product/route.js
import { NextResponse } from "next/server";
import { connectDB } from "../../../../libs/config/db";
import ProductModel from "../../../../libs/models/ProductModel";
import { writeFile } from 'fs/promises';
import { Buffer } from 'buffer';
import { errorToast } from "@/utils/Helper";
import { uploadImageToCloudinary } from "@/utils/Cloudniary";

export const dynamic = 'force-dynamic';

export async function POST(req) {
    await connectDB();

    try {
        const formData = await req.formData();
        const timeStamp = Date.now();

        // Image handling
        const image = formData.get('image');
        if (!image) {
            return errorToast("Image is required")
        }
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const uploadCloudinary = await uploadImageToCloudinary(buffer)
        // const path = `./public/productImages/${timeStamp}_${image.name}`;
        // await writeFile(path, buffer);
        // const imgUrl = `productImages/${timeStamp}_${image.name}`;

        // Product data
        const productData = {
            productName: formData.get('name'),
            productDetail: formData.get('detail'),
            productCategory: formData.get('category'),
            productQuantity: formData.get('quantity'),
            productImage: uploadCloudinary.secure_url,
            productPrice: formData.get('price'),
            featured: formData.get('featured') === 'true',
            productDiscountPrice: formData.get('productDiscountPrice')
        };

        await ProductModel.create(productData);
        return NextResponse.json({ msg: "Product added", success: true });
    } catch (error) {
        console.error("Error adding product:", error);
        return NextResponse.json({ msg: "Something went wrong", error }, { status: 400 });
    }
}
