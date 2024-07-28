// src/app/api/orders/route.js

import orderModel from '../../../../libs/models/orderModel';
import { connectDB } from '../../../../libs/config/db';
import { sendDetailToGmail } from '@/utils/sendEmail';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    await connectDB();

    try {
        const orderData = await req.json();
        if (!orderData.cartItems.length > 0) {
            return res.json({ msg: "No Checkout Products available" });
        }

        const checkoutProduct = await orderModel.create(orderData)
        await sendDetailToGmail(orderData)
        // res.json({ msg: "Checkout successfully" });
        // const newOrder = new orderModel(orderData);
        // await newOrder.save();
        console.log('====================================');
        console.log(orderData);
        console.log('====================================');
        return NextResponse.json({ success: true, orderId: orderData.orderId }, {
            status: 200,
        });
    } catch (error) {
        console.error('Error saving order:', error);
        return new Response(JSON.stringify({ success: false, error: 'Error saving order' }), {
            status: 500,
        });
    }
}
