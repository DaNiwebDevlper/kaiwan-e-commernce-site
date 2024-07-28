"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import { makeToast } from '@/utils/Helper';

const CheckoutForm = ({ cartItems }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phoneNo: '',
        totalPrice: '50',
        paymentMehod: 'cash on delivery'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCashOnDelivery = async () => {
        try {
            let orderId = Date.now().toString(); // Example order ID
            const orderData = {
                ...formData,
                cartItems,
                orderId,
            };

            // Send data to backend API
            await axios.post('/api/orders', orderData);
            makeToast("Order is placede successfuly")
            // router.push(`/payment?orderId=${orderId}`);
        } catch (error) {
            console.error('Checkout error:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <input
                className="w-full mb-2 p-2 border border-gray-300 rounded"
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />
            <input
                className="w-full mb-2 p-2 border border-gray-300 rounded"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />
            <input
                className="w-full mb-2 p-2 border border-gray-300 rounded"
                name="address"
                placeholder="Address"
                onChange={handleChange}
            />
            <input
                className="w-full mb-4 p-2 border border-gray-300 rounded"
                name="phoneNo"
                placeholder="Phone Number"
                onChange={handleChange}
            />
            <div className="h-[2px] my-5 w-full bg-black"></div>


            <button onClick={handleCashOnDelivery} className="w-full bg-green-500 text-white py-2 rounded mb-5">Cash on Delivery</button>

            <button className="w-full bg-yellow-500 text-white py-2 rounded">Bank Transfer</button>

        </div>
    );
};

export default CheckoutForm;
