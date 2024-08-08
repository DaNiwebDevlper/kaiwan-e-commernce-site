import { NextResponse } from "next/server";
import { connectDB } from "../../../../../libs/config/db";
import ProductModel from "../../../../../libs/models/ProductModel";
export const dynamic = 'force-dynamic';
export async function DELETE(request, { params }) {
    try {
        const id = params.id;
        await connectDB();
        const deleteProduct = await ProductModel.deleteOne({ _id: id });

        if (!deleteProduct.deletedCount) {
            return new NextResponse(
                JSON.stringify({ msg: "DB Error: Product not found" }),
                {
                    status: 400,
                    headers: {
                        'Cache-Control': 'no-store, max-age=0',
                    },
                }
            );
        }

        return new NextResponse(
            JSON.stringify({ msg: "Deleted Successfully" }),
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
            {
                status: 400,
                headers: {
                    'Cache-Control': 'no-store, max-age=0',
                },
            }
        );
    }
}
