"use client";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { setLoading } from "@/redux/slice/loadingSlice";
import { setProduct } from "@/redux/slice/productSlice";
import { makeToast } from "@/utils/Helper";
import axios from "axios";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProductRow = ({ srNo, setUpdateTable, setOpenPopup, product }) => {
    const dispatch = useAppDispatch();

    const onEdit = () => {
        dispatch(setProduct(product));
        setOpenPopup(true);
    };

    const handleDelete = async () => {
        const confirmDelete = confirm("Are you sure you want to delete this product?");
        if (!confirmDelete) return;

        try {
            dispatch(setLoading(true));
            await axios.delete(`/api/delete_product/${product._id}`).then((res) => makeToast(res.data.msg));
            setUpdateTable((prev) => !prev); // Trigger a re-fetch of the products
        } catch (error) {
            console.error("Failed to delete the product", error);
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <tr className="text-sm sm:text-lg border-b border-black/10 overflow-y-auto">
            <td className="hidden sm:block pt-3">
                <p className="pl-5">{srNo}</p>
            </td>
            <td>
                <p>{product.productName}</p>
            </td>
            <td>
                <p>RS {product.productPrice}</p>
            </td>
            <td className="py-2">
                <img src={`${product.productImage}`} alt="product_img" className="size-[40px]" />
            </td>
            <td>
                <p className="flex items-center text-xl sm:gap-2 gap-1">
                    <MdDelete className="hover:text-rose-500 cursor-pointer active:scale-90 transition-all" onClick={handleDelete} />
                    <FaEdit className="hover:text-green-500 cursor-pointer active:scale-90 transition-all" onClick={onEdit} />
                </p>
            </td>
        </tr>
    );
};

export default ProductRow;
