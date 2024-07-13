import { NextResponse } from "next/server";
import { connectDB } from "../../../../../libs/config/db";
import ProductModel from "../../../../../libs/models/ProductModel";

export async function DELETE(request, { params }) {
    try {
        const id = params.id;

        await connectDB();
        await ProductModel.findByIdAndDelete(id);
        console.log(id)
        return NextResponse.json({ msg: "Deleted Successfully" });
    } catch (error) {
        return NextResponse.json({
            msg: "Something went wrong",
            error
        }, { status: 400 });
    }
}