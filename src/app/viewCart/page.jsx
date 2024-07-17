"use client"

import Checkout from "@/components/redux/Checkout"
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks"
import { addToCart, removeFromCart } from "@/redux/slice/CartSlice"
import Image from "next/image"
import { MdDelete } from "react-icons/md"

const ViewCartPage = () => {
    const cartItems = useAppSelector(state => state.cart.cart)
    const dispatch = useAppDispatch()

    const handleIncrease = (item) => {
        dispatch(addToCart(item))
    }

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            dispatch(removeFromCart(item.id))
        }
    }

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0)
    const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

    return (
        <div className="min-h-[85vh] sm:p-5 ">
            <h1 className="text-2xl font-mono font-bold my-5 border-b pb-3 pl-5">MY Shopping BAG</h1>
            <div className="flex sm:flex-row flex-col">
                <table className="w-full min-h-[50vh]">
                    <thead className="w-full">
                        <tr className="font-thin py-3 text-black/60 dark:text-white/70 px-5 w-full">

                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Picture</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((items, index) => (
                            <tr className='text-sm sm:text-lg border-b  border-black/10 overflow-y-auto  px-5 w-full' key={index}>

                                <td>
                                    <div>{items.title}</div>
                                </td>
                                <td>
                                    <div >$ {items.price}</div>
                                </td>
                                <td >
                                    <div >{items.quantity}</div>
                                </td>
                                <td className='py-2'>
                                    <Image src={`/${items.imgSrc}`} alt='product_img' width={50} height={50} className='w-[40px]' />
                                </td>
                                <td>
                                    <div className='flex items-center text-xl sm:gap-2 gap-1 '>
                                        <button
                                            className="text-2xl text-green-500"
                                            onClick={() => handleIncrease(items)}
                                        >+</button>

                                        <button
                                            className="text-2xl text-red-500"
                                            onClick={() => handleDecrease(items)}
                                        >-</button>

                                        <button className="text-2xl text-red-500">
                                            <MdDelete onClick={() => dispatch(removeFromCart(items.id))} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="">
                        <tr className="font-bold my-3 pt-4">
                            <td colSpan="1">Total Price</td>
                            <td> ${totalCost}</td>
                            <td >{totalQuantity}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <Checkout />
            </div>
        </div>
    )
}

export default ViewCartPage
