"use client"
import Image from 'next/image'
import Link from 'next/link'
import { LuDollarSign } from 'react-icons/lu'
import { useAppDispatch } from '@/redux/hooks/hooks'
import { addToCart } from '@/redux/slice/CartSlice'

const ProductCard = ({ id, title, imgSrc, price, quantity }) => {
    const dispatch = useAppDispatch()
    return (
        <div className={`sm:w-[250px] w-[92%]  shadow dark:shadow-white/30 shrink-0 flex flex-col gap-3 transition-all duration-300 transform rounded-xl p-3`}>
            <div className="overflow-hidden">
                <Link href={`/products/${id}`}>
                    <img src={`${imgSrc}`} alt='card img' className='sm:w-[330px] rounded-lg sm:h-[250px] w-[200px] h-[150px] cursor-pointer hover:scale-150 transition-all duration-200' loading='lazy' />
                </Link>
            </div>
            <div className="flex justify-between px-1 items-center">
                <h1 className='sm:text-[14px] text-[10px] font-semibold font-sarif'>{title}</h1>
                <p className='flex items-center text-[10px] sm:text-lg'> <span>{quantity == 0 ? '' : <p className='text-emerald-500'>Rs: </p>}</span> {quantity == 0 ? <p className='text-rose-500'>Sold out</p> : price}</p>
            </div>
            <div className="flex justify-between items-center">
                {quantity == 0 ? <button className='px-4 py-2 w-full text-sm rounded-md bg-black/80 hover:bg-[#222] transition-all text-white cursor-not-allowed border dark:bg-transparent border-white/30' disabled>Sold out</button> :

                    <button className='px-4 py-2 w-full text-sm rounded-md bg-black/80 hover:bg-[#222] transition-all text-white border dark:bg-transparent border-white/30' onClick={() => dispatch(addToCart({ id, imgSrc, title, price, quantity }))}>Add to Cart</button>

                }
            </div>
        </div>
    )
}

export default ProductCard
