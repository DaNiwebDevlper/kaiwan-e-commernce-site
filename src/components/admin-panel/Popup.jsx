"use client"

import { CategoryOptions } from "@/app/admin/addProducts/page";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setLoading } from "@/redux/slice/loadingSlice";
import { makeToast } from "@/utils/Helper";
import axios from "axios";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Popup = ({ setOpenPopup, setUpdateTable }) => {
    const dispatch = useAppDispatch();
    const productData = useAppSelector(state => state.product);

    const [inputData, setInputData] = useState({
        name: productData.productName,
        category: productData.productCategory,
        price: productData.productPrice,
        quantity: productData.productQuantity
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        axios.put(`/api/edit_product/${productData._id}`, inputData)
            .then((res) => {
                makeToast(res.data.msg);
                setUpdateTable((prevState) => !prevState);
            })
            .catch(error => console.error(error))
            .finally(() => {
                dispatch(setLoading(false));
                setOpenPopup(false);
            });
    };

    return (
        <div className="fixed z-10 top-0 left-0 grid place-content-center h-screen bg-[#00000070] backdrop-blur-sm w-full">
            <div className="relative z-10 bg-white py-8 text-black text-center rounded-lg sm:w-[500px] w-[400px]">
                <IoClose className="text-2xl active:scale-90 absolute z-20 top-0 right-0 cursor-pointer m-4" onClick={() => setOpenPopup(false)} />

                <h2 className="text-2xl font-madimi font-semibold">Edit Product</h2>
                <form className="mt-6 mx-auto  flex flex-col gap-y-4 w-[80%]" onSubmit={handleSubmit}>
                    <label htmlFor="Name">
                        <input
                            placeholder="Enter the Name..."
                            required
                            onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                            value={inputData.name}
                            className="px-4 py-2 border border-gray-400 bg-slate-100 outline-none rounded-lg w-full"
                        />
                    </label>
                    <input
                        placeholder="Enter the Price..."
                        type="number"
                        onChange={(e) => setInputData({ ...inputData, price: e.target.value })}
                        value={inputData.price}
                        className="px-4 py-2 border border-gray-400 bg-slate-100 outline-none rounded-lg w-full"
                    />
                    <div className="flex justify-between gap-x-4">
                        <select name='productCategory' onChange={(e) => setInputData({ ...inputData, category: e.target.value })} value={inputData.category} className='w-full h-fit rounded-lg bg-slate-100 outline-none border-gray-400 px-4 py-2 border'>
                            {CategoryOptions.map((options, index) => (
                                <option value={options} key={index}>
                                    {options}
                                </option>
                            ))}
                        </select>


                        <input
                            type="number"
                            placeholder="quantity"
                            onChange={(e) => setInputData({ ...inputData, quantity: e.target.value })}
                            value={inputData.quantity}
                            className="px-4 py-2 border border-gray-400 outline-none bg-slate-100 rounded-lg w-full"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button className="text-sm px-6 w-full py-3 rounded-lg bg-black text-white dark:border dark:text-white">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Popup;
