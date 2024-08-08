import { NextResponse } from "next/server";
import { connectDB } from "../../../../../libs/config/db";
import ProductModel from "../../../../../libs/models/ProductModel";

export async function DELETE(request, { params }) {
    try {
        const id = params.id;
        await connectDB();
        const deleteProduct = await ProductModel.deleteOne({ _id: id });

        if (!deleteProduct.deletedCount) {
            return NextResponse.json({ msg: "DB Error: Product not found" });
        }

        return NextResponse.json({ msg: "Deleted Successfully" });
    } catch (error) {
        return NextResponse.json(
            {
                msg: "Something went wrong",
                error: error.message,
            },
            { status: 400 }
        );
    }
}
