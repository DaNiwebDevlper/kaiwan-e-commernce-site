'use client'
import { useAppDispatch } from '@/redux/hooks/hooks'
import { setLoading } from '@/redux/slice/loadingSlice'
import { setProduct } from '@/redux/slice/productSlice'
import axios from 'axios'
import Image from 'next/image'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'



const ProductRow = ({ srNo, setUpdateTable, setOpenPopup, product }) => {
    const dispatch = useAppDispatch()

    const onEdit = () => {
        dispatch(setProduct(product))
        setOpenPopup(true)

    }

    /// delete products function

    const handleDelete = async () => {
        const confirmDelete = confirm("Are you sure you want to delete this product?");
        if (!confirmDelete) return;

        try {
            dispatch(setLoading(true));
            await axios.delete(`/api/delete_product/${product._id}`);
            setUpdateTable(prev => !prev); // Trigger a re-fetch of the products
        } catch (error) {
            console.error("Failed to delete the product", error);
        } finally {
            dispatch(setLoading(false));
        }
    };
    return (
        <tr className='text-sm sm:text-lg border-b  border-black/10 overflow-y-auto'>
            <td>
                <div className='pl-5'>{srNo}</div>
            </td>
            <td>
                <div>{product.productName}</div>
            </td>
            <td>
                <div>$ {product.productPrice}</div>
            </td>
            <td className='py-2'>
                <Image src={`/${product.productImage}`} alt='product_img' width={50} height={50} className='w-[40px]' />
            </td>
            <td>
                <div className='flex items-center text-xl sm:gap-2 gap-1 '>
                    <MdDelete className=' hover:text-rose-500 cursor-pointeractive:scale-90 transition-all cursor-pointer active:scale-90' onClick={handleDelete} />
                    <FaEdit className='l hover:text-green-500 cursor-pointer active:scale-90 transition-all' onClick={onEdit} />
                </div>
            </td>
        </tr>
    )
}

export default ProductRow
