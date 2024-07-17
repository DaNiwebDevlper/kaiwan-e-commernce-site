import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const CartInfo = ({ srNo, items }) => {
    <tr className='text-sm sm:text-lg border-b  border-black/10 overflow-y-auto'>
        <td>
            <div className='pl-5'>{srNo}</div>
        </td>
        <td>
            <div>{items.title}</div>
        </td>
        <td>
            <div>$ {items.price}</div>
        </td>
        <td className='py-2'>
            <Image src={`/${items.imgSrc}`} alt='product_img' width={50} height={50} className='w-[40px]' />
        </td>
        <td>
            <div className='flex items-center text-xl sm:gap-2 gap-1 '>
                <MdDelete className=' hover:text-rose-500 cursor-pointeractive:scale-90 transition-all cursor-pointer active:scale-90' />
                <FaEdit className='l hover:text-green-500 cursor-pointer active:scale-90 transition-all' />
            </div>
        </td>
    </tr>
}

export default CartInfo