import { NextResponse } from "next/server";
import { connectDB } from "../../../../libs/config/db";
import ProductModel from "../../../../libs/models/ProductModel";
export const dynamic = 'force-dynamic';
export async function GET() {
    await connectDB();

    try {
        const featuredProducts = await ProductModel.find({ featured: true });
        return NextResponse.json(featuredProducts);
    } catch (error) {
        console.error("Error fetching featured products:", error);
        return NextResponse.json({ error: "Error fetching featured products" }, { status: 400 });
    }
}
