"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setLoading } from "@/redux/slice/loadingSlice";
import axios from "axios";
import Loader from "./admin-panel/Loader";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { addToCart } from "@/redux/slice/CartSlice";
import { FaArrowRightLong } from "react-icons/fa6";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useAppDispatch();
    const loading = useAppSelector(store => store.loading)

    useEffect(() => {
        dispatch(setLoading(true));
        axios.get("/api/get_products")
            .then((res) => setProducts(res.data.filter(product => product.featured)))
            .catch((err) => console.log(err))
            .finally(() => dispatch(setLoading(false)));
    }, [dispatch]);
    return (
        <div className="min-h-screen my-9 flex flex-col items-center justify-center">
            <h1 className="sm:text-4xl text-3xl font-bold font-mono my-5 mb-10  text-center">Featured Products</h1>
            {loading && <Loader />}

            {/* //// product list */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-5 gap-y-9 place-content-center pl-3">
                {products.map((data, i) => (
                    <div className="sm:w-[250px] w-[92%] sm:min-h-[400px] min-h-[300px]  shadow dark:shadow-white/30 shrink-0 flex flex-col gap-3 transition-all duration-300 transform rounded-xl justify-between p-3" key={i} >
                        {data.sale && (
                            <div className="bg-green-500 text-white font-bold font-mono rounded-full absolute sm:top-[-10px] top-[-7px] left-[-7px] sm:left-[-10px] z-20 sm:text-[12px] text-[12px] text-center flex justify-center items-center sm:min-size-[50px] max-size-[70px] size-[50px] px-1">
                                <p>{data.sale}</p>
                            </div>
                        )}

                        <div className="overflow-hidden">
                            {/* product image */}
                            <Link href={`/products/${data._id}`} className='relative'>
                                <Image src={data.productImage} width={200} height={150} alt='card img' className='sm:w-[330px] rounded-lg sm:h-[250px] w-[200px] h-[150px] cursor-pointer hover:scale-150 transition-all duration-200' loading='lazy' />

                            </Link>
                        </div>
                        <div className="flex flex-col justify-center gap-y-2 px-1 items-center">
                            {/* prodcut name */}
                            <h1 className='sm:text-[18px] text-[13px] font-semibold font-sarif'>{data.productName}</h1>
                            {/* product price */}
                            <div className="flex justify-center items-center gap-x-2">
                                <p className='flex items-center gap-x-2'>
                                    {data.productQuantity == 0 ? '' : <span className='text-[14px] sm:text-lg line-through text-gray-500'>Rs {data.productDiscountPrice}</span>}
                                </p>

                                <p className='flex items-center gap-x-1  text-[10px] sm:text-lg'> <span>{data.productQuantity == 0 ? '' : <span className=''>Rs </span>}</span> {data.productQuantity == 0 ? <span className='text-rose-500'>Sold out</span> : data.productPrice}</p>
                            </div>

                        </div>
                        <Link href="/viewCart">
                            <div className="flex justify-between items-center">
                                {data.productQuantity == 0 ? <button className='px-4 py-2 w-full sm:text-sm text-[10px] rounded-md bg-black/80 hover:bg-[#222] transition-all text-white cursor-not-allowed border dark:bg-transparent border-white/30' disabled>Sold out</button> :

                                    <button className='px-4 py-2 w-full sm:text-sm text-[10px] rounded-md bg-black/80 hover:bg-[#222] transition-all text-white border dark:bg-transparent border-white/30' onClick={() => dispatch(addToCart({ id: data._id, imgSrc: data.productImage, title: data.productName, price: data.productPrice, quantity: data.productQuantity }))}>Add to Cart</button>

                                }
                            </div>
                        </Link>

                    </div>
                ))}
            </div>
            <div className="w-[85%] my-9 grid place-content-center">

                <Link href="/products" className=" text-md py-3 px-6 dark:bg-rose-500 text-white bg-slate-950 rounded-lg active:scale-90 transition-all flex items-center gap-x-1">see more <FaArrowRightLong /></Link>
            </div>
        </div>
    );
};

export default FeaturedProducts;
