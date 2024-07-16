import { NextResponse } from "next/server";
import { connectDB } from "../../../../libs/config/db";
import ProductModel from "../../../../libs/models/ProductModel";
import { writeFile } from 'fs/promises';
import { Buffer } from 'buffer';

export async function POST(req) {
    await connectDB();

    try {
        const formData = await req.formData();
        const timeStamp = Date.now();

        // Image handling
        const image = formData.get('image');
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);

        const path = `./public/productImages/${timeStamp}_${image.name}`;
        await writeFile(path, buffer);
        const imgUrl = `productImages/${timeStamp}_${image.name}`; // Ensure path is relative to `public`

        // Product data
        const productData = {
            productName: formData.get('name'),
            productDetail: formData.get('detail'),
            productCategory: formData.get('category'),
            productQuantity: formData.get('quantity'),
            productImage: imgUrl,
            productPrice: formData.get('price'),
            featured: formData.get('featured') == 'true'
        };

        await ProductModel.create(productData);
        return NextResponse.json({ msg: "Product added", success: true });
    } catch (error) {
        console.error("Error adding product:", error);
        return NextResponse.json({
            msg: "Something went wrong",
            error
        }, { status: 400 });
    }
}
