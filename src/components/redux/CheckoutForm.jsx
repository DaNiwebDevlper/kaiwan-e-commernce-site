'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { makeToast } from '@/utils/Helper'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
import { setLoading } from '@/redux/slice/loadingSlice'
import { Loader } from 'lucide-react'

const provinces = ['Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan', 'Gilgit-Baltistan', 'Azad Kashmir']

const CheckoutForm = ({ cartItems, TotalPrice }) => {
    const route = useRouter()
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(store => store.loading)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phoneNo: '',
        totalPrice: '',
        paymentMethod: '',
        province: ''
    })
    const [showBankDetails, setShowBankDetails] = useState(false)
    const [orderId, setOrderId] = useState('')

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            totalPrice: TotalPrice
        }))
    }, [TotalPrice])

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const getNextOrderId = async () => {
        const response = await axios.get('/api/nextOrderId')
        return response.data.orderId
    }

    const handleCashOnDelivery = async () => {
        try {
            const newOrderId = await getNextOrderId()
            const orderData = {
                ...formData,
                cartItems,
                orderId: newOrderId,
                paymentMethod: 'Cash on Delivery'
            }

            // Send data to backend API
            await axios.post('/api/orders', orderData)
            makeToast('Order is placed successfully')
            dispatch(setLoading(false))
            route.push(`/payment?orderId=${newOrderId}`)
            // Navigate to the payment page
        } catch (error) {
            console.error('Checkout error:', error)
        }
    }

    const handleBankTransfer = async () => {
        try {
            const newOrderId = await getNextOrderId()
            setOrderId(newOrderId)
            setShowBankDetails(true)
            const orderData = {
                ...formData,
                cartItems,
                orderId: newOrderId,
                paymentMethod: 'Bank Transfer'
            }

            // Send data to backend API
            await axios.post('/api/orders', orderData)
            makeToast('Order is placed successfully')
        } catch (error) {
            console.error('Checkout error:', error)
        }
    }

    return (
        <form className='max-w-md mx-auto p-6 shadow-md border-l'>
            {isLoading && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50'>
                    <Loader />
                </div>
            )}
            <h1 className='text-2xl font-bold my-4 font-madimi'>Checkout Form</h1>
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
            <div className='h-[2px] my-5 w-full bg-black dark:bg-white/60'></div>

            {!showBankDetails ? (
                <>
                    <button
                        type='button'
                        onClick={handleCashOnDelivery}
                        className='w-full bg-green-500 text-white py-2 rounded mb-5'
                    >
                        Cash on Delivery
                    </button>
                    <button
                        type='button'
                        onClick={handleBankTransfer}
                        className='w-full bg-yellow-500 text-white py-2 rounded'
                    >
                        Bank Transfer
                    </button>
                </>
            ) : (
                <div className='bank-details'>
                    <div className='border p-5 border-red-600 mb-5'>
                        <h2 className='text-xl text-red-500 font-semibold mb-3'>Note</h2>
                        <p>
                            Please add the <b>Order ID</b> as a <b>reference number</b>. If
                            you do not add the Order ID, the payment will not be considered.
                            For more information contact us: <u>0370-4381300</u>
                        </p>
                    </div>
                    <p>MUHAMMAD ASIF SHAHZAD</p>
                    <p>Meezan Bank- Mianwali Branch</p>
                    <p>Account Number: 80010104939803</p>
                    <p>IBAN: PK21MEZN0080010104939803</p>
                    <p>
                        <b>Order ID:</b> {orderId}
                    </p>
                </div>
            )}
        </form>
    )
}

export default CheckoutForm
