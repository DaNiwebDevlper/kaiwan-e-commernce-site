import { NextResponse } from "next/server";
import { connectDB } from "../../../../../libs/config/db";
import ProductModel from "../../../../../libs/models/ProductModel";
export const dynamic = 'force-dynamic';
export async function PUT(request, { params }) {
    try {
        const body = await request.json();
        const id = params.id;
        const { name: productName, category: productCategory, price: productPrice, quantity: productQuantity, discount: productDiscountPrice } = body;

        await connectDB();
        const data = await ProductModel.findByIdAndUpdate(
            id,
            {
                productName,
                productCategory,
                productPrice,
                productQuantity, productDiscountPrice
            },
            { new: true }
        );

        return new NextResponse(
            JSON.stringify({ msg: "Updated Successfully", data }),
            {
                status: 200,
                headers: {
                    'Cache-Control': 'no-store, max-age=0',
                },
            }
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({
                msg: "Something went wrong",
                error: error.message,
            }),
            { status: 400, headers: { 'Cache-Control': 'no-store, max-age=0' } }
        );
    }
}
