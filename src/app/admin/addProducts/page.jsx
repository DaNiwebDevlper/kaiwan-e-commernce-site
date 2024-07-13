"use client"

import { useAppDispatch } from "@/redux/hooks/hooks";
import { setLoading } from "@/redux/slice/loadingSlice";
import { makeToast } from "@/utils/Helper";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export const CategoryOptions = [
    'Whitening', 'Hair Care', 'Sunblock', 'Acne', 'Moisturizer', 'All'
];

const AddProduct = () => {
    const [showImg, setShowImg] = useState(null);
    const [data, setData] = useState({
        productName: "",
        productPrice: "",
        productQuantity: "",
        productCategory: "Sunblock",
        productDetail: ""
    });

    const dispatch = useAppDispatch();

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const onImageChange = (event) => {
        setShowImg(event.target.files[0]);
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        const formdata = new FormData();
        formdata.append('name', data.productName);
        formdata.append('price', data.productPrice);
        formdata.append('category', data.productCategory);
        formdata.append('detail', data.productDetail);
        formdata.append('quantity', data.productQuantity);
        formdata.append('image', showImg);

        try {
            const response = await axios.post("/api/add_product", formdata);

            if (response.data.success) {
                makeToast("Product Added Successfully");
                setShowImg(null);
                setData({
                    productName: "",
                    productPrice: "",
                    productQuantity: "",
                    productCategory: "Sunblock",
                    productDetail: ""
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            makeToast("Error submitting form. Please try again.");
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='p-5'>
            <p className='text-xl font-semibold font-mono'>Upload Thumbnail</p>
            <label htmlFor='image' className='' >
                <Image src={!showImg ? "/assets/uploadIcon.png" : URL.createObjectURL(showImg)} className='cursor-pointer p-1 border-dotted border-2 w-[150px] h-[120px] my-4' width={100} height={80} alt='image upload icon' />
            </label>
            <input onChange={onImageChange} type='file' required hidden name='image' id='image' className='w-fit' />

            <p className=' text-black/80 dark:text-white/80 pl-2'>Product Name: </p>
            <input type='text' name='productName' onChange={onChangeHandler} value={data.productName} placeholder='Enter the product name...' required className='text-sm sm:w-[60%] w-full border rounded-lg py-2 px-4 my-2' />

            <p className='text-black/80 dark:text-white/80 pl-2'>Description: </p>
            <textarea placeholder='Enter the product description...' rows={10} className='border rounded-xl px-5 py-2 md:w-[60%] w-full my-2' name='productDetail' onChange={onChangeHandler} value={data.productDetail}></textarea>
            <br />

            <div className="flex justify-between w-full sm:w-[60%]">
                <div className="">
                    <p className=' text-black/80 dark:text-white/80 pl-2'>Price: </p>
                    <input type='number' name='productPrice' onChange={onChangeHandler} value={data.productPrice} required className='text-sm w-[100px] border rounded-lg py-2 px-4 my-2' />
                </div>
                <div className="">
                    <p className=' text-black/80 dark:text-white/80 pl-2'>Quantity: </p>
                    <input type='number' name='productQuantity' onChange={onChangeHandler} value={data.productQuantity} required className='text-sm w-[100px] border rounded-lg py-2 px-4 my-2' />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:w-[60%] sm:items-center">
                <select name='productCategory' onChange={onChangeHandler} value={data.productCategory} className='w-fit h-fit rounded-lg px-4 py-2 border'>
                    {CategoryOptions.map((options, index) => (
                        <option value={options} key={index}>
                            {options}
                        </option>
                    ))}
                </select>
                <br />

                <button type='submit' className='py-2 sm:w-[150px] w-full rounded-lg bg-black dark:bg-teal-500 dark:text-black transition-all text-white active:scale-90'>ADD</button>
            </div>
        </form>
    );
};

export default AddProduct;
