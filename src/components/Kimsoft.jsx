import { SiCodefresh } from "react-icons/si";
import { AiFillSafetyCertificate, AiOutlineBarChart } from "react-icons/ai";
import Image from "next/image";

const Kimsoft = () => {

    return (
        <div className="flex justify-center bg-sky-50 dark:bg-slate-800 items-center sm:min-h-[85vh] w-full min-h-[60vh]">
            <div className='sm:w-[80%] w-[90%] grid sm:grid-cols-3 grid-cols-2 place-content-center gap-3 sm:p-9 p-3'>

                {/* ///////////////////////////// */}
                <div className="flex flex-col sm:gap-y-9 gap-y-3 items-end justify-center pl-9">
                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-sky-300 rounded-full sm:size-14 size-9">
                            <SiCodefresh className="text-sky-500 sm:text-3xl text-2xl" />
                        </div>
                        <div className="">
                            <p className="text-xl font-bold font-mono">Lightens The Skin</p>
                            <p className="text-sm text-sky-700 sm:w-[70%]">It Lighten Dark Skin Blemishes, Freckles & Discoloration</p>
                        </div>
                    </div>

                    <div className="flex gap-2 w-full">
                        <div className="border flex justify-center items-center overflow-hidden border-sky-300 rounded-full sm:size-14 size-9">
                            <AiFillSafetyCertificate className="text-sky-500 sm:text-3xl text-xl" />
                        </div>
                        <div className="">
                            <p className="text-xl font-bold font-mono">Skin Types</p>
                            <p className="text-sm text-sky-700  sm:w-[70%]">Suitable for all types of skin</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-sky-300 rounded-full sm:size-14  size-9">
                            <AiOutlineBarChart className="text-sky-500 sm:text-3xl text-xl" />
                        </div>
                        <div className="">
                            <p className="text-xl font-bold font-mono">Moisturize</p>
                            <p className="text-sm text-sky-700  sm:w-[70%]">It Moisturize The Skin with the Effect Of Hyaluronic Acid</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-start ">
                    <Image src="/assets/products/kimsoft.png" alt="kimsoft" width={100} height={300}
                        className="sm:w-[170px] sm:h-[390px] w-[140px] h-[320px] object-contain" />
                </div>
                <div className="sm:flex flex-col gap-y-9 items-center justify-center hidden">
                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-sky-300 rounded-full size-14">
                            <SiCodefresh className="text-sky-500 text-3xl" />
                        </div>
                        <div className="">
                            <p className="text-xl font-bold font-mono">Recommended</p>
                            <p className="text-sm text-sky-700  w-[70%]">This product is recommand for sll type skin</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-sky-300 rounded-full size-14">
                            <AiFillSafetyCertificate className="text-sky-500 text-3xl" />
                        </div>
                        <div className="">
                            <p className="text-xl font-bold font-mono">100% Original</p>
                            <p className="text-sm text-sky-700 w-[70%]">All the Product are 100% real and Fresh</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-sky-300 rounded-full size-14">
                            <AiOutlineBarChart className="text-sky-500 text-3xl" />
                        </div>
                        <div className="">
                            <p className="text-xl font-bold font-mono">GMO Free</p>
                            <p className="text-sm text-sky-700 w-[70%]">All the Product are 100% real and Fresh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kimsoft