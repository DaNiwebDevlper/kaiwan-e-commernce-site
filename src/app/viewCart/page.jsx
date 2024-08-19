'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
import { addToCart, removeFromCart } from '@/redux/slice/CartSlice'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react'
import { MdCancel } from 'react-icons/md'
import { MdShoppingCartCheckout } from "react-icons/md";

const ViewCartPage = () => {
    const cartItems = useAppSelector(state => state.cart.cart)
    const dispatch = useAppDispatch()
    const route = useRouter()
    const [user, setUser] = useState(null)
    useEffect(() => {
        const userCookie = Cookies.get('user');
        if (userCookie) {
            setUser(JSON.parse(userCookie));

        }
    }, []);


    /// add logoout feature
    const handleCheckout = () => {
        if (cartItems.length === 0) {
            route.push('/products')
        }
    };

    const handleIncrease = item => {
        dispatch(addToCart(item))
    }

    const handleDecrease = item => {
        if (item.quantity > 1) {
            dispatch(removeFromCart(item.id))
        }
    }

    const handleRemove = item => {
        dispatch(removeFromCart(item.id))
    }
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0)
    const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)


    /// delivery charges
    let deliveryFees = ""
    if (totalCost >= 2000) {
        deliveryFees = "Free"

    } else {
        deliveryFees = 150

    }
    return (
        <div className='sm:p-5'>
            <div className="flex flex-col sm:flex-row gap-y-2  sm:justify-between p-5 border-b sm:items-center">
                <h1 className='text-2xl font-mono font-bold  sm:pl-5'>MY Shopping BAG</h1>
                <Link href="/products" className='text-md underline pb-1 text-rose-500'>Contnioue shoping</Link>
            </div>
            <div className='flex sm:flex-row flex-col'>
                <div className="sm:w-[70%]">
                    {cartItems.length > 0 ? (<div className=" grid sm:grid-cols-2 gap-5 grid-cols-1 py-5">
                        {
                            cartItems.map((cartData, index) => {
                                return (
                                    <div className="w-[100%] flex gap-x-5 sm:border border-b p-4  items-center relative" key={index}>
                                        <button>
                                            <MdCancel className='text-xl text-red-500 absolute sm:top-3 top-0 right-3' onClick={() => handleRemove(cartData)} />
                                        </button>
                                        <div className="">
                                            <Image src={cartData.imgSrc} alt='product img' width={100} height={100} className='rounded-lg shadow-md size-[100px] sm:size-[120px]' />
                                        </div>


                                        <div className="flex flex-col gap-y-2
                                    ">
                                            <h1 className='sm:text-xl text-md font-semibold font-mono'>{cartData.title}</h1>
                                            {/* ///////--Quantity Container--////// */}
                                            <div className="border justify-evenly items-center flex w-[110px] h-[40px] overflow-hidden">
                                                <button onClick={() => handleIncrease(cartData)} className='text-xl w-[33%] text-center border-r p-3'>+</button>
                                                <p className='text-lg font-bold w-[34%] text-center'>{cartData.quantity}</p>
                                                <button onClick={() => handleDecrease(cartData)} className='text-xl w-[33%] text-center border-l p-3'>-</button>
                                            </div>
                                            <p className='text-md'> <span className='font-semibold'>Price: </span> {cartData.price}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>) : (
                        <div className="w-full flex justify-items-center items-center flex-col gap-5">
                            <Image src="/assets/emptyCart.png" alt='empty CArt image' width={300} height={300} className='sm:w-[350px] sm:h-[350px] w-[250px] h-[250px]' />
                            <p className='text-center sm:text-lg text-sm w-[90%] sm:w-full'>Your Cart is empty, please purchase some products <Link href="/products" className='underline text-blue-500'>Product Page</Link></p>
                        </div>
                    )}
                </div>

                {/* /////////////--Summary--//////////////// */}
                <div className='sm:w-[30%] sm:border-l flex flex-col gap-y-4 p-5 m-5'>
                    <p className='text-xl font-bold'>Summary</p>
                    <p className='text-md font-semibold dark:text-slate-400 text-slate-700'>
                        Total Products: <span className='font-normal text-lg text-black dark:text-white'>{totalQuantity}</span>
                    </p>
                    <p className='text-md font-semibold dark:text-slate-400 text-slate-700'>
                        SubTotal: <span className='font-normal text-lg text-black dark:text-white'>{totalCost}</span>
                    </p>
                    <p className='text-md font-semibold dark:text-slate-400 text-slate-700'>
                        Delivery Charges: <span className='text-lg text-black dark:text-white'>{deliveryFees}</span>
                    </p>
                    <p className='border-t pt-2 text-md font-semibold dark:text-slate-400 text-slate-700'>
                        Total Cost: <span className='font-normal text-lg text-green-500'>{deliveryFees === 150 ? totalCost + 150 : totalCost + 0}</span>
                    </p>
                    <button className='flex gap-2 items-center px-4 py-2 w-full bg-black/80 active:scale-90 transition-all rounded-md dark:bg-rose-700 text-white  justify-center' onClick={handleCheckout}>Checkout <MdShoppingCartCheckout size={20} /></button>
                </div>

            </div>


        </div>
    )
}

export default ViewCartPage
