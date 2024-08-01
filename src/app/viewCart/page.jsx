'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
import { addToCart, removeFromCart } from '@/redux/slice/CartSlice'
import Image from 'next/image'
import Link from 'next/link'
import { MdCancel, MdDelete } from 'react-icons/md'
import CheckoutForm from '@/components/redux/CheckoutForm'

const ViewCartPage = () => {
    const cartItems = useAppSelector(state => state.cart.cart)
    const dispatch = useAppDispatch()

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

    return (
        <div className='sm:p-5'>
            <h1 className='text-2xl font-mono font-bold mt-6 border-b pb-5 pl-5'>MY Shopping BAG</h1>
            <div className='flex sm:flex-row flex-col'>
                <table className='w-full'>
                    <thead className='w-full'>
                        <tr className='font-thin text-left py-3 text-black/60 dark:text-white/70  w-full '>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Picture</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {cartItems.length > 0 ? (
                        <tbody className='w-full border-b-1'>
                            {cartItems.map((items, index) => (
                                <tr className='text-sm sm:text-lg border-b  border-black/10' key={index}>
                                    <td>{items.title}</td>
                                    <td>RS {items.price}</td>
                                    <td className='py-2'>
                                        <Image
                                            src={`/${items.imgSrc}`}
                                            alt='product_img'
                                            width={50}
                                            height={50}
                                            className='w-[40px]'
                                        />
                                    </td>
                                    <td>
                                        <span className='flex items-center text-xl sm:gap-2 gap-1'>
                                            <button className='text-2xl text-green-500' onClick={() => handleIncrease(items)}>
                                                +
                                            </button>
                                            <span className='text-lg font-bold w-3'> {items.quantity} </span>
                                            <button className='text-2xl text-red-500' onClick={() => handleDecrease(items)}>
                                                -
                                            </button>
                                            <button className='text-2xl text-red-500'>
                                                <MdCancel onClick={() => handleRemove(items)} />
                                            </button>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <span className='hidden sm:block min-h-[50vh] w-full  sm:pt-[50px]  sm:pl-[200px]'>
                            <Image src='/assets/empty.svg' alt='empty' width={300} height={300} className='w-[400px]' />
                            <p>
                                Your cart is empty, please add some products:{' '}
                                <Link href='/products' className='text-blue-500 underline'>
                                    Product Page
                                </Link>
                            </p>
                        </span>
                    )}
                </table>
                <CheckoutForm cartItems={cartItems} TotalPrice={totalCost} />
            </div>
            <div className=' sm:w-[30%] w-[90%] border rounded-xl flex flex-col gap-y-4 p-5 m-5'>
                <p className='text-xl font-bold'>Summary</p>
                <p className='text-md font-semibold dark:text-slate-400 text-slate-700'>
                    Total Products: <span className='font-normal text-lg text-black dark:text-white'>{totalQuantity}</span>
                </p>
                <p className='text-md font-semibold dark:text-slate-400 text-slate-700'>
                    Delivery fees: <span className='font-normal text-lg text-black dark:text-white'>150</span>
                </p>
                <p className='border-t pt-2 text-md font-semibold dark:text-slate-400 text-slate-700'>
                    Total Cost: <span className='font-normal text-lg text-green-500'>{totalCost + 150}</span>
                </p>
            </div>
        </div>
    )
}

export default ViewCartPage
