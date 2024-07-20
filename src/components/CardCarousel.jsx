"use client"
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { LuDollarSign } from "react-icons/lu";
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { setLoading } from '@/redux/slice/loadingSlice';
import axios from 'axios';
import { addToCart } from '@/redux/slice/CartSlice';
import Loader from './admin-panel/Loader';
const CardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const [products, setProducts] = useState([]);
    const dispatch = useAppDispatch();
    const loading = useAppSelector(store => store.loading)

    useEffect(() => {
        dispatch(setLoading(true));
        axios.get("/api/products")
            .then((res) => setProducts(res.data.filter(product => product.featured)))
            .catch((err) => console.log(err))
            .finally(() => dispatch(setLoading(false)));
    }, [dispatch]);

    /// add five star rating

    // const renderStars = (rating) => {
    //     const totalStars = 5
    //     const stars = []

    //     for (let i = 0; i < totalStars; i++) {
    //         if (i < rating) {
    //             stars.push(
    //                 <RiStarSFill className='text-xl text-yellow-400' />
    //             )

    //         } else {
    //             stars.push(
    //                 <RiStarSLine className='text-xl text-slate-300' />
    //             );
    //         }
    //     }
    //     return stars
    // }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };



    return (
        <div className="relative sm:w-full w-[95%]">
            <div
                className="flex sm:gap-5 overflow-hidden"
                ref={carouselRef}

            >
                {loading && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                        <Loader />
                    </div>
                )}
                {products.map((item, index) => (
                    <div
                        key={item._id}
                        className={`sm:w-[250px] w-[300px] shrink-0 sm:mx-0 mx-3 flex flex-col gap-3 transition-all  duration-300 transform border rounded-xl p-3 ${index === currentIndex ? 'translate-x-0' : 'translate-x-1'
                            }`}
                        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
                    >
                        <div className="overflow-hidden">
                            <Link href={`/products/${item._id}`}>
                                <Image src={`/${item.productImage}`} alt='card img' width={300} height={200} className='w-[330px] rounded-lg h-[250px] cursor-pointer hover:scale-150 transition-all duration-200' />
                            </Link>
                        </div>
                        <div className="flex justify-between px-1 items-center">

                            <h1 className='text-md font-semibold font-sarif'>{item.productName}</h1>
                            <p className='flex items-center'>{item.productQuantity == 0 ? <p className='text-rose-500'>Sold out</p> : item.productPrice}<span>{item.productQuantity == 0 ? '' : <LuDollarSign className='text-green-500' />}</span></p>
                        </div>

                        <div className="flex justify-between  items-center">
                            {item.productQuantity == 0 ? <button className='px-4 py-2 w-full text-sm rounded-md bg-black/80 hover:bg-[#222] transition-all text-white cursor-not-allowed border dark:bg-transparent border-white/30' disabled>Sold out</button> :
                                <button className='px-4 py-2 w-full text-sm rounded-md bg-black/80 hover:bg-[#222] transition-all text-white border dark:bg-transparent border-white/30' onClick={() => { dispatch(addToCart({ title: item.productName, imgSrc: item.productImage, price: item.productPrice, id: item._id, quantity: item.productQuantity })) }}>Add to Cart</button>

                            }
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-3 rounded-full text-xl transform -translate-y-1/2 p-2 dark:bg-slate-200 bg-black/80 text-white dark:text-black"
                onClick={prevSlide}
            >
                <GrPrevious />
            </button>
            <button
                className="absolute top-1/2 right-3 rounded-full text-xl  transform -translate-y-1/2 p-2 dark:bg-slate-200 bg-black/80 text-white dark:text-black"
                onClick={nextSlide}
            >
                <GrNext />
            </button>
        </div>
    );
};

export default CardCarousel;