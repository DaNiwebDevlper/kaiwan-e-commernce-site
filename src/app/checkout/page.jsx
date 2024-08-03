"use client"
import CheckoutForm from '@/components/redux/CheckoutForm'
import { useAppSelector } from '@/redux/hooks/hooks'
import Image from 'next/image'
import React from 'react'

const CheckoutPage = () => {
    const cartItems = useAppSelector(state => state.cart.cart)
    return (

        <div className='w-full flex'>
            <div className="sm:w-[50%] w-full p-5">
                <CheckoutForm cartItems={cartItems} />
            </div>
            <div className="w-full sm:w-[50%] mt-[85px] hidden sm:block  overflow-hidden">
                <Image src="/assets/form-pic.svg" alt="form pic" width={700} height={900} />
            </div>
        </div>
    )
}

export default CheckoutPage