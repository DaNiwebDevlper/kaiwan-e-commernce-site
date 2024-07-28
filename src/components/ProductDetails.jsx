import React from 'react'

const ProductDetails = ({ icon, title, desc }) => {
    return (
        <div className="flex gap-2 w-full border-inherit">
            <div className="border flex justify-center items-center overflow-hidden  rounded-full sm:size-12 size-9 border-inherit">
                <div className=" sm:text-3xl text-xl">{icon}</div>
            </div>
            <div className="">
                <p className="text-xl text-black dark:text-white font-bold font-mono w-[80%]">{title}</p>
                <p className="text-sm  sm:w-[70%]">{desc}</p>
            </div>
        </div>
    )
}

export default ProductDetails