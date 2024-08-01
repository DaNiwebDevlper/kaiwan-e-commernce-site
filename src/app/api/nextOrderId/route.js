import { NextResponse } from "next/server"
import { connectDB } from "../../../../libs/config/db"

export async function GET() {
    const { db } = await connectDB()

    // Fetch the last used order ID
    const settings = await db.collection('orderId').findOne({ name: 'orderIdCounter' })

    let nextOrderId = 1
    if (settings && settings.value) {
        nextOrderId = settings.value + 1
    }

    // Update the order ID counter in the database
    await db.collection('orderId').updateOne(
        { name: 'orderIdCounter' },
        { $set: { value: nextOrderId } },
        { upsert: true }
    )

    // Format the order ID as a four-digit string
    const formattedOrderId = String(nextOrderId).padStart(8, '0')

    return NextResponse.json({ orderId: formattedOrderId })
}
