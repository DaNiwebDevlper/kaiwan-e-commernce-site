"use client";

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
        productDiscountPrice: "",
        productQuantity: "",
        productCategory: "Sunblock",
        productDetail: "",
        featured: false
    });

    const dispatch = useAppDispatch();

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
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
        formdata.append('productDiscountPrice', data.productDiscountPrice);
        formdata.append('category', data.productCategory);
        formdata.append('detail', data.productDetail);
        formdata.append('quantity', data.productQuantity);
        formdata.append('featured', data.featured ? 'true' : 'false');
        formdata.append('image', showImg);

        try {
            const response = await axios.post("/api/add_product", formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.success) {
                makeToast("Product Added Successfully");
                setShowImg(null);
                setData({
                    productName: "",
                    productPrice: "",
                    productDiscountPrice: "",
                    productQuantity: "",
                    productCategory: "Sunblock",
                    productDetail: "",
                    featured: false
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
            <label htmlFor='image'>
                <Image
                    src={!showImg ? "/assets/uploadIcon.png" : URL.createObjectURL(showImg)}
                    className='cursor-pointer p-1 border-dotted border-2 w-[150px] h-[120px] my-4'
                    width={100}
                    height={80}
                    alt='image upload icon'
                    unoptimized
                />
            </label>
            <input onChange={onImageChange} type='file' required hidden name='image' id='image' className='w-fit' />

            <p className='text-black/80 dark:text-white/80 pl-2'>Product Name: </p>
            <input type='text' name='productName' onChange={onChangeHandler} value={data.productName} placeholder='Enter the product name...' required className='text-sm sm:w-[60%] w-full border rounded-lg py-2 px-4 my-2' />

            <p className='text-black/80 dark:text-white/80 pl-2'>Description: </p>
            <textarea placeholder='Product description...' rows={10} className='border rounded-xl px-5 py-2 md:w-[60%] w-full my-2' name='productDetail' onChange={onChangeHandler} value={data.productDetail}></textarea>
            <br />

            <div className="flex justify-between flex-wrap items-center w-full sm:w-[60%]">
                <div className="">
                    <p className='text-black/80 dark:text-white/80 pl-2'>Price: </p>
                    <input type='number' name='productPrice' onChange={onChangeHandler} value={data.productPrice} required className='text-sm w-[100px] border rounded-lg py-2 px-4 my-2' />
                </div>
                <div className="">
                    <p className='text-black/80 dark:text-white/80 pl-2'>Discount Price: </p>
                    <input type='number' name='productDiscountPrice' onChange={onChangeHandler} value={data.productDiscountPrice} className='text-sm w-[100px] border rounded-lg py-2 px-4 my-2' />
                </div>
                <div className="">
                    <p className='text-black/80 dark:text-white/80 pl-2'>Quantity: </p>
                    <input type='number' name='productQuantity' onChange={onChangeHandler} value={data.productQuantity} required className='text-sm w-[100px] border rounded-lg py-2 px-4 my-2' />
                </div>
                <div className="">
                    <p className="text-black/80 dark:text-white/80 pl-2 ">Category:</p>
                    <select name='productCategory' onChange={onChangeHandler} value={data.productCategory} className='w-fit h-fit rounded-lg px-4 text-sm py-2 border my-2'>
                        {CategoryOptions.map((options, index) => (
                            <option value={options} key={index}>
                                {options}
                            </option>
                        ))}
                    </select>
                </div>

                <label className="flex items-center px-4 py-[6px] my-2 dark:bg-black bg-white mt-6 border rounded-lg">
                    <input type="checkbox" name="featured" checked={data.featured} onChange={onChangeHandler} />
                    <span className="ml-2">Featured</span>
                </label>
            </div>
            <div className="sm:w-[60%]">
                <button type='submit' className='py-2  rounded-lg bg-black dark:bg-rose-700 dark:hover:bg-red-900 transition-all text-white active:scale-90 w-full my-4'>ADD</button>
            </div>
        </form>
    );
};

export default AddProduct;
