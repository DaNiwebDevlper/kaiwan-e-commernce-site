"use client"
import Link from 'next/link'
import { useAppDispatch } from '@/redux/hooks/hooks'
import { addToCart } from '@/redux/slice/CartSlice'
import Image from 'next/image'

const ProductCard = ({ id, title, imgSrc, price, quantity, discount, sale }) => {
    const dispatch = useAppDispatch()
    return (
        <main className={`sm:w-[250px] w-[92%] sm:min-h-[400px] min-h-[300px] shadow dark:shadow-white/30 shrink-0 flex flex-col gap-3 transition-all duration-300 transform rounded-xl p-3 justify-between`}>

            {/* product sale button */}
            {sale && (
                <div className="bg-green-500 text-white font-bold font-mono rounded-full absolute sm:top-[-10px] top-[-7px] left-[-7px] sm:left-[-10px] z-20 sm:text-[12px] text-[12px] text-center flex justify-center items-center sm:min-size-[50px] max-size-[70px] size-[50px] px-1">
                    <p>{sale}</p>
                </div>
            )}
            <div className="overflow-hidden">
                <Link href={`/products/${id}`} className='relative'>
                    <Image src={imgSrc} width={200} height={150} alt='card img' className='sm:w-[330px] rounded-lg sm:h-[250px] w-[200px] h-[150px] cursor-pointer hover:scale-150 transition-all duration-200' loading='lazy' />

                </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2 px-1">
                <h1 className='sm:text-[18px] text-[12px] font-semibold font-sarif'>{title}</h1>
                <div className="flex justify-center items-center gap-x-2">
                    <p className='flex items-center gap-x-2'>
                        {quantity == 0 ? '' : <span className='text-[10px] sm:text-lg line-through text-gray-500'>{!discount ? "" : "Rs"} {discount}</span>}
                    </p>

                    <p className='flex items-center gap-x-1 text-[10px] sm:text-lg'> <span>{quantity == 0 ? '' : <span className=''>Rs{' '}</span>}</span> {quantity == 0 ? <span className='text-rose-500'>Sold out</span> : price}</p>
                </div>
            </div>

            <Link href="/viewCart" className="flex justify-between items-center">
                {quantity == 0 ? <button className='px-4 py-2 w-full text-sm rounded-md bg-black/80 hover:bg-[#222] transition-all text-white cursor-not-allowed border dark:bg-transparent border-white/30' disabled>Sold out</button> :

                    <button className='px-4 py-2 w-full text-sm rounded-md bg-black/80 hover:bg-[#222] transition-all text-white border dark:bg-transparent border-white/30' onClick={() => dispatch(addToCart({ id, imgSrc, title, price, quantity }))}>Add to Cart</button>

                }
            </Link>

        </main>
    )
}

export default ProductCard
