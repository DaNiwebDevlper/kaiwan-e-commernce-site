import { SiCodefresh } from "react-icons/si";
import { AiFillSafetyCertificate, AiOutlineBarChart } from "react-icons/ai";
import Image from "next/image";

const Amaizax = () => {

    return (
        <div className="flex justify-center bg-rose-200 dark:bg-black items-center sm:min-h-[85vh] w-full min-h-[60vh] my-9">
            <div className='sm:w-[90%] w-[95%] grid sm:grid-cols-3 grid-cols-2 place-content-center gap-3 sm:p-9 p-3'>

                {/* ///////////////////////////// */}
                <div className="flex flex-col sm:gap-y-9 gap-y-3 items-start justify-center pl-9">
                    <div className="flex gap-2 w-full">
                        <div className="sm:border flex justify-center items-center overflow-hidden border-rose-300 rounded-full sm:size-14 size-9">
                            <SiCodefresh className="text-rose-500 sm:text-3xl text-2xl" />
                        </div>
                        <div className="">
                            <p className="sm:text-xl text-md font-bold font-mono">Lightens The Skin</p>
                            <p className="sm:text-sm text-[10px] text-rose-700 dark:text-white/60 sm:w-[70%]">It Lighten Dark Skin Blemishes, Freckles & Discoloration</p>
                        </div>
                    </div>

                    <div className="flex gap-2 w-full">
                        <div className="sm:border flex justify-center items-center overflow-hidden border-rose-300 rounded-full sm:size-14 size-9">
                            <AiFillSafetyCertificate className="text-rose-500 sm:text-3xl text-xl" />
                        </div>
                        <div className="">
                            <p className="sm:text-xl text-md font-bold font-mono">Skin Types</p>
                            <p className="sm:text-sm text-[10px] text-rose-700 dark:text-white/60 sm:w-[70%]">Suitable for all types of skin</p>
                        </div>
                    </div>

                    <div className="flex gap-2 w-full">
                        <div className="sm:border flex justify-center items-center overflow-hidden border-rose-300 rounded-full sm:size-14  size-9">
                            <AiOutlineBarChart className="text-rose-500 sm:text-3xl text-xl" />
                        </div>
                        <div className="">
                            <p className="sm:text-xl text-md font-bold font-mono">Moisturize</p>
                            <p className="sm:text-sm text-[10px] text-rose-700 dark:text-white/60 sm:w-[70%]">It Moisturize The Skin with the Effect Of Hyaluronic Acid</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-start ">
                    <Image src="/assets/highlight-products/Amaizax.png" alt="Amaizax" width={100} height={300} loading="lazy"
                        className="sm:w-[170px] sm:h-[390px] w-[140px] h-[320px] object-contain" />
                </div>
                <div className="sm:flex flex-col gap-y-9 items-start justify-center hidden">
                    <div className="flex gap-2">
                        <div className="sm:border flex justify-center items-center overflow-hidden border-rose-300 rounded-full size-14">
                            <SiCodefresh className="text-rose-500 text-3xl" />
                        </div>
                        <div className="">
                            <p className="sm:text-xl text-md font-bold font-mono">Recommended</p>
                            <p className="sm:text-sm text-[12px] text-rose-700 dark:text-white/60 w-[70%]">This product is recommand for sll type skin</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="sm:border flex justify-center items-center overflow-hidden border-rose-300 rounded-full size-14">
                            <AiFillSafetyCertificate className="text-rose-500 text-3xl" />
                        </div>
                        <div className="">
                            <p className="sm:text-xl text-md font-bold font-mono">100% Original</p>
                            <p className="sm:text-sm text-[12px] text-rose-700 dark:text-white/60 w-[70%]">All the Product are 100% real and Fresh</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="sm:border flex justify-center items-center overflow-hidden border-rose-300 rounded-full size-14">
                            <AiOutlineBarChart className="text-rose-500 text-3xl" />
                        </div>
                        <div className="">
                            <p className="sm:text-xl text-md font-bold font-mono">Dead Skin</p>
                            <p className="sm:text-sm text-[12px] text-rose-700 dark:text-white/60 w-[70%]">It reomve the all dead cells from skin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Amaizax