"use client"
import { CategoryOptions } from '../admin/addProducts/page'
import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import Image from 'next/image'
import productData from "../../../data/productData.json"


const Products = () => {
    const [category, setCategory] = useState("All")

    const filteredProducts = category === "All" ? productData : productData.filter((product) => (
        product.category === category
    ))

    return (
        <div className='min-h-screen'>
            <div className="flex justify-center items-center mb-9 mt-6 flex-wrap sm:gap-1 gap-y-2">
                {CategoryOptions.map((option) => (
                    <button
                        key={option}
                        onClick={() => setCategory(option)}
                        className={`mr-2 sm:px-4 px-2 text-[10px] sm:py-2 py-1 uppercase sm:text-sm rounded-full border-rose-400 border ${category === option ? 'bg-rose-600 text-white' : 'dark:text-white/80'
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap shrink justify-center items-center gap-5">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((data) => {
                        return (
                            <ProductCard key={data.id} title={data.productName} price={data.price} imgSrc={data.productImage} id={data.id} />
                        )
                    })
                ) : (
                    <Image src="/assets/empty.svg" alt='no result' width={500} height={400} />
                )}
            </div>
        </div>
    )
}

export default Products
