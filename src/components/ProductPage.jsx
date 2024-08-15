"use client"
import { useEffect, useState } from 'react';
import { ProductCard } from '.';
import Image from 'next/image';
import { CategoryOptions } from '@/app/admin/addProducts/page';
import axios from 'axios';
import Loader from './admin-panel/Loader';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { setLoading } from '@/redux/slice/loadingSlice';


const ProductPage = () => {
    const [category, setCategory] = useState("All");
    const [products, setProducts] = useState([]);
    const isLoading = useAppSelector(store => store.loading)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setLoading(true));
        axios.get("/api/get_products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
            .finally(() => dispatch(setLoading(false)));
    }, [dispatch]);

    const filteredProducts = category === "All" ? products : products.filter((product) => (
        product.productCategory === category
    ));

    return (
        <main className='min-h-screen py-9'>
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <Loader />
                </div>
            )}
            <div className="flex justify-center items-center mb-9 mt-6 flex-wrap sm:gap-1 gap-y-2">
                {CategoryOptions.map((option) => (
                    <button
                        key={option}
                        onClick={() => setCategory(option)}
                        className={`mr-2 sm:px-4 px-2 text-sm sm:py-2 py-1 uppercase sm:text-sm rounded-full border-rose-400 border ${category === option ? 'bg-rose-600 text-white' : 'dark:text-white/80'
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className=" my-9 flex flex-col items-center justify-center">
                <div className={`grid ${filteredProducts.length > 0 ? "lg:grid-cols-4 md:grid-cols-3 grid-cols-2" : "grid-cols-1"} sm:gap-5 gap-y-5 place-content-center pl-3`}>
                    {filteredProducts.length > 0 ? (

                        filteredProducts.map((data) => (

                            <ProductCard key={data._id} title={data.productName} price={data.productPrice} imgSrc={data.productImage} id={data._id} quantity={data.productQuantity} discount={data.productDiscountPrice} sale={data.sale} width='w-[80%]' />
                        ))
                    ) : <Image src="/assets/empty.svg" loading='lazy' alt='no result' width={500} height={500} className='' />

                    }
                </div>

            </div>
        </main>
    );
}

export default ProductPage