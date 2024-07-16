import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LuDollarSign } from 'react-icons/lu'

const ProductCard = ({ id, title, imgSrc, price }) => {
    return (
        <div className={`sm:w-[250px] w-[80%] shrink-0 flex flex-col gap-3 transition-all duration-300 transform border rounded-xl p-3`}>
            <div className="overflow-hidden">
                <Link href={`/products/${id}`}>
                    <Image src={`/${imgSrc}`} alt='card img' width={300} height={200} className='w-[330px] rounded-lg h-[250px] cursor-pointer hover:scale-150 transition-all duration-200' />
                </Link>
            </div>
            <div className="flex justify-between px-1 items-center">
                <h1 className='text-md font-semibold font-sarif'>{title}</h1>
                <p className='flex items-center'>{price} <span><LuDollarSign className='text-green-500' /></span></p>
            </div>
            <div className="flex justify-between items-center">
                <button className='px-4 py-2 w-full text-sm rounded-md bg-black/80 hover:bg-[#222] transition-all text-white border dark:bg-transparent border-white/30'>Buy Now</button>
            </div>
        </div>
    )
}

export default ProductCard
