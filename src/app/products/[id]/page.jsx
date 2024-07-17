"use client"
import { useParams } from "next/navigation"
import Image from "next/image"
import { setLoading } from "@/redux/slice/loadingSlice"
import { useAppDispatch } from "@/redux/hooks/hooks"
import axios from "axios"
import { useEffect, useState } from "react"
import { FaOpencart } from "react-icons/fa";
import { addToCart } from "@/redux/slice/CartSlice"
const ProductDetail = () => {
    const params = useParams()
    const dispatch = useAppDispatch()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        dispatch(setLoading(true));
        axios.get("/api/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
            .finally(() => dispatch(setLoading(false)));
    }, []);
    return (
        <div className='min-h-screen flex flex-col justify-center items-center p-9'>
            {products.map((product) => {
                return (params.id == product._id ?
                    <div className="flex flex-col sm:flex-row gap-5 items-center ">
                        <div className="sm:w-[400px] sm:h-[300px] overflow-hidden rounded-2xl">
                            <Image src={`/${product.productImage}`} alt="product img" width={400} height={400} className="hover:scale-150  transition-all object-contain" />
                        </div>

                        <div className="sm:w-[60%] flex flex-col gap-y-5 justify-center">
                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl font-semibold font-madimi">{product.productName}</h1>
                                <p className="text-xl"><span className="font-semibold text-green-500">$ </span>{product.productPrice}</p>
                            </div>
                            <p className="text-sm text-black/60 dark:text-gray-300  text-justify">{product.productDetail}</p>
                            <div className="flex flex-col gap-y-5 sm:flex-row justify-between">
                                <p className="flex gap-x-2 items-center"><span className="text-lg font-semibold font-mono">Availablity: </span>{product.productQuantity == 0 ? <p className="text-rose-600">Sold out</p> : <p className="text-green-500">Product is Available</p>}</p>
                                <button className="px-4 py-2 rounded-lg bg-black text-white active:scale-90 border dark:bg-rose-700 transition-all flex gap-1 justify-center items-center text-sm"
                                    onClick={() => dispatch(addToCart({ id: product._id, imgSrc: product.productImage, title: product.productName, price: product.productPrice }))}> Add to Cart <FaOpencart className="text-xl text-rose-300 mx-1 " /> </button>
                            </div>

                        </div>

                    </div> : ""
                )
            })}

        </div>
    )
}

export default ProductDetail