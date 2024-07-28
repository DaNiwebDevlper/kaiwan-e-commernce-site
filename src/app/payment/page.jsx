"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import axios from 'axios';
import { makeToast } from '@/utils/Helper';

const PaymentPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId');
    useEffect(() => {
        if (!orderId) {
            router.push('/');
        }
    }, [orderId, router]);


    const handleEmailSend = async () => {
        try {
            const emailData = {
                subject: 'Order Confirmation',
                recipient: 'dnazir343@gmail.com',
                message: `
                Order ID: ${orderId}
                Payment Method: ${type}
              `,
            };

            await axios.post('/api/send-email', { emailData });
            makeToast('Payment details sent via email.');
        } catch (error) {
            console.error('Error sending email:', error);
            makeToast('Failed to send email.');
        }
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Payment Options</h1>
            <p>Your Order ID: {orderId}</p>
            <button
                className="w-full bg-green-500 text-white py-2 rounded mt-4"
                onClick={() => handleEmailSend('cash on delivery')}
            >
                Cash on Delivery
            </button>
            <button
                className="w-full bg-yellow-500 text-white py-2 rounded mt-4"
                onClick={() => {
                    handleEmailSend('Bank Transfer');
                    alert(`
                MUHAMMAD ASIF SHAHZAD
                Meezan Bank - Mianwali Branch
                Account Number: 80010104939803
                IBAN: PK21MEZN0080010104939803
              `);
                }}
            >
                Bank Transfer
            </button>
        </div>
    );
};


export default PaymentPage;
