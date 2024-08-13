import orderModel from '../../../../libs/models/orderModel';
import { connectDB } from '../../../../libs/config/db';
import { sendDetailToGmail } from '@/utils/sendEmail';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function POST(req) {
    await connectDB();

    try {
        // Check if the request body is present
        const orderData = await req.json();

        // Check if orderData is valid
        if (!orderData || typeof orderData !== 'object') {
            return NextResponse.json({ success: false, error: 'Invalid order data' }, { status: 400 });
        }

        // Validate required fields
        if (!orderData.paymentMethod) {
            return NextResponse.json({ success: false, error: 'paymentMethod is required' }, { status: 400 });
        }

        // Create order in the database
        await orderModel.create(orderData);
        await sendDetailToGmail(orderData);

        return NextResponse.json({ success: true, orderId: orderData.orderId }, { status: 200 });
    } catch (error) {
        console.error('Error saving order:', error.message || error);
        return NextResponse.json({ success: false, error: 'Error saving order' }, { status: 500 });
    }
}
