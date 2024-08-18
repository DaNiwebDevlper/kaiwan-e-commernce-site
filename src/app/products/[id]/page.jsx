"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { setLoading } from "@/redux/slice/loadingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaOpencart } from "react-icons/fa";
import { addToCart } from "@/redux/slice/CartSlice";
import Loader from "@/components/admin-panel/Loader";
import Link from "next/link";


const ProductDetails = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const [products, setProducts] = useState([]);
    const isLoading = useAppSelector(state => state.loading);

    useEffect(() => {
        dispatch(setLoading(true));
        axios.get("/api/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
            .finally(() => dispatch(setLoading(false)));
    }, [dispatch]);
    return (
        <div className='min-h-screen flex flex-col justify-center items-center p-9'>
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <Loader />
                </div>
            )}
            {products.map((product) => {
                return (params.id == product._id ?
                    <div className="flex flex-col gap-5" key={product._id}>
                        <div className="flex flex-col sm:flex-row gap-5">

                            {/* ////--Product Image */}
                            <div className="sm:w-[400px] sm:h-[400px] overflow-hidden  rounded-2xl">
                                <Image src={`${product.productImage}`} alt="product img" width={400} height={400} loading="lazy" className="hover:scale-150 transition-all object-cover" />
                            </div>

                            {/* /////--Product Details */}
                            <div className="sm:w-[60%] flex flex-col gap-y-5 justify-center">
                                <h1 className="text-3xl font-semibold font-madimi">{product.productName}</h1>
                                <div className="flex items-center gap-x-5">
                                    <p className="line-through text-md text-black/60 dark:text-gray-400 text-xl"> {product.productDiscountPrice}</p>
                                    <p className="text-xl"><span className="font-semibold text-green-500">Rs </span>{product.productPrice}</p>
                                </div>

                                <div className="flex flex-col w-full gap-y-5  ">
                                    <div className="">
                                        <p className="flex gap-x-2 items-center"><span className="text-lg font-semibold text-md font-mono">Availablity: </span>{product.productQuantity == 0 ? <span className="text-rose-600">Out of Stock</span> : <span className="text-green-500 text-sm">In stock</span>}</p>
                                    </div>
                                    <div className="">
                                        {product.productQuantity == 0 ? <button className='px-4 py-2 rounded-lg bg-black text-white active:scale-90 border dark:bg-rose-700 transition-all flex gap-1 justify-center items-center text-sm cursor-not-allowed' disabled >Sold out</button> :
                                            <Link href="/viewCart" className='w-full'>
                                                <button className="px-4 py-2 rounded-lg bg-black text-white active:scale-90 border dark:bg-rose-700 transition-all flex gap-1 justify-center items-center text-sm"
                                                    onClick={() => dispatch(addToCart({ id: product._id, imgSrc: product.productImage, title: product.productName, price: product.productPrice, quantity: product.productQuantity }))}> Add to Cart <FaOpencart className="text-xl text-rose-300 mx-1 " /> </button>
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ////// product description */}
                        <div className="sm:w-[80%]">
                            <h1 className="text-3xl font-bold pb-3">Description:</h1>
                            <div
                                className="product-description text-justify"
                                dangerouslySetInnerHTML={{ __html: product.productDetail }}
                            />
                        </div>

                    </div> : null
                )
            })}

        </div>
    );
}

export default ProductDetails
