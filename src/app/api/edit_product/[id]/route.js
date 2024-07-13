import { NextResponse } from "next/server";
import { connectDB } from "../../../../../libs/config/db";
import ProductModel from "../../../../../libs/models/ProductModel";

export async function PUT(request, { params }) {
    try {
        const body = await request.json();
        const id = params.id;
        const { name: productName, category: productCategory, price: productPrice } = body;

        await connectDB();
        const data = await ProductModel.findByIdAndUpdate(id, {
            productName,
            productCategory,
            productPrice
        }, { new: true });

        return NextResponse.json({ msg: "Updated Successfully", data });
    } catch (error) {
        return NextResponse.json({
            msg: "Something went wrong",
            error
        }, { status: 400 });
    }
}
