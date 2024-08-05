import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <div className="relative flex justify-center items-center min-h-[70vh] mt-[100px]">
            <div className=' min-h-[50vh] flex sm:items-center items-end p-5 bg-gradient-to-br from-red-300 to-red-100 w-[80%] rounded-xl shadow-md '>
                <div className="sm:pl-9">
                    <p className='sm:text-3xl text-2xl font-mono font-bold text-slate-900 '>Amaizax Skin Lighting Cream</p>
                    <p className='text-sm text-rose-700 pb-5 pt-2'>For glowing skin try this product that make your more bright.</p>
                    <Link href="/products/66a270754022396c20828a5e">
                        <button className='text-md px-6 py-3 rounded-lg text-white bg-rose-500 active:scale-90 transition-all cursor-pointer'>Buy Now</button>
                    </Link>
                </div>
                <Image loading='lazy' src="/assets/banner.png" width={300} height={500} alt='banner' className=' absolute sm:right-[150px] right-9  sm:top-[-70px] top-[-60px] sm:w-[300px] w-[200px] h-[230px] sm:h-[350px]' />
            </div>
        </div>
    )
}

export default Banner