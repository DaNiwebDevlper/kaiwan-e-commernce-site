import { NextResponse } from "next/server";
import { connectDB } from "../../../../libs/config/db";
import ProductModel from "../../../../libs/models/ProductModel";
export const dynamic = 'force-dynamic';
export async function GET() {
    try {

        await connectDB()
        const data = await ProductModel.find()

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({
            msg: "something went wrong",
            error
        }, { state: 400 })
    }
}