"use client"

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
        price: productData.productPrice
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        axios.put(`/api/edit_product/${productData._id}`, inputData)
            .then((res) => {
                makeToast("Product Updated Successfully!");
                setUpdateTable((prevState) => !prevState);
            })
            .catch(error => console.error(error))
            .finally(() => {
                dispatch(setLoading(false));
                setOpenPopup(false);
            });
    };

    return (
        <div className="fixed z-10 top-0 left-0 grid place-content-center h-screen bg-[#00000070] w-full">
            <div className="relative z-10 bg-white py-8 text-black text-center rounded-lg w-[500px]">
                <IoClose className="text-2xl active:scale-90 absolute z-20 top-0 right-0 cursor-pointer m-4" onClick={() => setOpenPopup(false)} />

                <h2 className="text-2xl font-madimi font-semibold">Edit Product</h2>
                <form className="mt-6 mx-auto w-fit flex flex-col gap-y-4" onSubmit={handleSubmit}>
                    <input
                        placeholder="Enter the Name..."
                        required
                        onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                        value={inputData.name}
                        className="px-4 py-2 border border-gray-400 bg-slate-200 outline-none rounded-lg w-fit"
                    />

                    <input
                        placeholder="Enter the Category..."
                        required
                        onChange={(e) => setInputData({ ...inputData, category: e.target.value })}
                        value={inputData.category}
                        className="px-4 py-2 border border-gray-400 bg-slate-200 outline-none rounded-lg w-fit"
                    />

                    <input
                        placeholder="Enter the Price..."
                        required
                        onChange={(e) => setInputData({ ...inputData, price: e.target.value })}
                        value={inputData.price}
                        className="px-4 py-2 border border-gray-400 outline-none bg-slate-200 rounded-lg w-fit"
                    />
                    <div className="flex justify-end">
                        <button className="text-sm px-4 py-2 rounded-lg bg-black text-white dark:border dark:text-white">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Popup;
