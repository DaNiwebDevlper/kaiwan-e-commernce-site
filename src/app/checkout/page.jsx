"use client"
import CheckoutForm from '@/components/redux/CheckoutForm'
import { useAppSelector } from '@/redux/hooks/hooks'
import React from 'react'

const CheckoutPage = () => {
    const cartItems = useAppSelector(state => state.cart.cart)
    return (

        <div className='w-full flex justify-center items-center'>
            <div className="sm:w-[50%] shadow-lg  w-full p-5 my-9 rounded-lg border">
                <CheckoutForm cartItems={cartItems} />
            </div>
        </div>
    )
}

export default CheckoutPage