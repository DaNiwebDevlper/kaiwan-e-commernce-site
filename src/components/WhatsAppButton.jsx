import Link from 'next/link'
import React from 'react'
import { FaSquareWhatsapp } from "react-icons/fa6";


const WhatsAppButton = () => {
    return (
        <div className='relative '>
            <Link aria-label="Chat on WhatsApp" href="https://wa.me/+923704381300" target="_blank"> <FaSquareWhatsapp className='w-[50px] h-[50px] fixed bottom-9 right-7 text-green-600 animate-bounce hover:animate-none' />
            </Link>
        </div>
    )
}

export default WhatsAppButton