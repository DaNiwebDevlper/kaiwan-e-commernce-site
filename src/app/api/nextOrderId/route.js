import { NextResponse } from "next/server";
import { connectDB } from "../../../../libs/config/db";
export const dynamic = 'force-dynamic';
export async function GET() {
    try {
        const db = await connectDB();

        // Fetch the last used order ID
        const settings = await db.collection('orderId').findOne({ name: 'orderIdCounter' });

        let nextOrderId = 1;
        if (settings && settings.value) {
            nextOrderId = settings.value + 1;
        }

        // Update the order ID counter in the database
        await db.collection('orderId').updateOne(
            { name: 'orderIdCounter' },
            { $set: { value: nextOrderId } },
            { upsert: true }
        );

        // Format the order ID as an eight-digit string
        const formattedOrderId = String(nextOrderId).padStart(8, '0');

        return NextResponse.json({ orderId: formattedOrderId });
    } catch (error) {
        console.error("Error generating next order ID:", error);
        return NextResponse.json({ error: "Error generating next order ID" }, { status: 500 });
    }
}
