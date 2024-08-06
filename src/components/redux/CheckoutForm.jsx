'use client'
import { useState } from 'react'
import axios from 'axios'
import { errorToast, makeToast } from '@/utils/Helper'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
import { setLoading } from '@/redux/slice/loadingSlice'
import { setOrderDetails } from '@/redux/slice/OrderDetails'
import Loader from '../admin-panel/Loader'

const provinces = ['Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan', 'Gilgit-Baltistan', 'Azad Kashmir']

const CheckoutForm = ({ cartItems }) => {
    const route = useRouter()
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(store => store.loading)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phoneNo: '',
        paymentMethod: '',
        province: '',
        note: ''
    })

    const handleChange = e => {
        const { name, value, type, checked } = e.target
        if (type === 'checkbox') {
            setFormData({ ...formData, paymentMethod: checked ? value : '' })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const getNextOrderId = async () => {
        const response = await axios.get('/api/nextOrderId')
        return response.data.orderId
    }

    const handlePlaceOrder = async () => {
        try {
            dispatch(setLoading(true))
            const newOrderId = await getNextOrderId()
            const orderData = { ...formData, cartItems, orderId: newOrderId }

            // Ensure that cartItems is defined and structured correctly
            if (!Array.isArray(cartItems) || cartItems.length === 0) {
                throw new Error('Cart items are not properly defined')
            }

            // Send data to backend API
            await axios.post('/api/orders', orderData)
            makeToast('Order placed successfully')
            dispatch(setLoading(false))
            dispatch(setOrderDetails(orderData))
            route.push('/payment')
        } catch (error) {
            console.error('Checkout error:', error)
            dispatch(setLoading(false))
            errorToast('Error placing order')
        }
    }

    return (
        <form className='w-full'>
            {isLoading && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50'>
                    <Loader />
                </div>
            )}
            <h1 className='text-3xl font-bold my-4 font-madimi'>Checkout Form</h1>
            <input
                className='w-full mb-2 p-2 border border-gray-300 rounded'
                name='name'
                placeholder='Name'
                onChange={handleChange}
                required
            />
            <input
                className='w-full mb-2 p-2 border border-gray-300 rounded'
                name='email'
                placeholder='Email'
                onChange={handleChange}
                required
            />
            <input
                className='w-full mb-2 p-2 border border-gray-300 rounded'
                name='address'
                placeholder='Address'
                onChange={handleChange}
                required
            />
            <input
                className='w-full mb-4 p-2 border border-gray-300 rounded'
                name='phoneNo'
                placeholder='Phone Number'
                onChange={handleChange}
                required
            />
            <select
                className='w-full mb-4 p-2 border border-gray-300 rounded'
                name='province'
                onChange={handleChange}
                required
            >
                <option value=''>Select Province</option>
                {provinces.map(province => (
                    <option key={province} value={province}>
                        {province}
                    </option>
                ))}
            </select>
            <textarea
                className='w-full mb-4 p-2 border border-gray-300 rounded'
                name='note'
                placeholder='Add any additional notes related to delivery(optional)'
                onChange={handleChange}
            />
            <div className='h-[2px] my-5 w-full bg-black dark:bg-white/60'></div>

            <div className='flex gap-5 flex-col'>
                <div className="">
                    <h1 className='text-xl font-semibold font-madimi mb-3'>Payment Method</h1>
                    <label className='mr-2'>
                        <input
                            type='checkbox'
                            name='paymentMethod'
                            value='Cash on Delivery'
                            checked={formData.paymentMethod === 'Cash on Delivery'}
                            onChange={handleChange}
                            className='mr-2'
                        />
                        Cash on Delivery
                    </label>
                    <label className='ml-4'>
                        <input
                            type='checkbox'
                            name='paymentMethod'
                            value='Bank Transfer'
                            checked={formData.paymentMethod === 'Bank Transfer'}
                            onChange={handleChange}
                            className='text-xl mx-2'
                        />
                        Bank Transfer
                    </label>
                </div>
                <div className="w-full border border-red-500 p-5 mb-5">
                    <h1 className='text-xl font-bold text-rose-500'>Note:</h1>
                    <p className='text-black/70 dark:text-slate-400'><span className='font-semibold dark:text-white text-black'>Bank Transfer:</span> is a manual system, means when you select the bank transfer payment method and place the order, then shows the bank account details, where you send the payment</p>
                </div>
            </div>

            <button
                type='button'
                onClick={handlePlaceOrder}
                className='w-full dark:bg-rose-500 bg-black/80 active:scale-95 transition-all text-white py-2 rounded'
            >
                Place Order
            </button>
        </form>
    )
}

export default CheckoutForm
