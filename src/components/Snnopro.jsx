import { SiCodefresh } from "react-icons/si";
import { AiFillSafetyCertificate, AiOutlineBarChart } from "react-icons/ai";
import Image from "next/image";

const Snnopro = () => {

    return (
        <div className="flex justify-center bg-slate-100 items-center sm:min-h-[85vh] w-full min-h-[60vh]">
            <div className='sm:w-[80%] w-[90%] grid sm:grid-cols-3 grid-cols-2 place-content-center gap-3 sm:p-9 p-3'>

                {/* ///////////////////////////// */}
                <div className="flex flex-col sm:gap-y-9 gap-y-3 justify-center">
                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-orange-500 rounded-full sm:w-[50px] sm:h-[50px] size-10">
                            <Image src="/assets/icons/Snnopro/light-skin.png" alt="icons" width={40} height={40} />
                        </div>
                        <div className="w-[80%]">
                            <p className="sm:text-xl text-black text-md font-bold font-mono">Lighten The Skin</p>
                            <p className="sm:text-sm text-[12px] text-orange-700">It reduce the melanin, that make skin more white and bright</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-orange-500 rounded-full sm:w-[50px] sm:h-[50px] size-10">
                            <Image src="/assets/icons/Snnopro/UVA.png" alt="icons" width={30} height={30} />
                        </div>
                        <div className="w-[80%]">
                            <p className="sm:text-xl text-black text-md font-bold font-mono">UVA/UVB</p>
                            <p className="sm:text-sm text-[12px] text-orange-700">
                                It protects your skin from UVA/UVB rays
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-orange-500 rounded-full sm:w-[50px] sm:h-[50px] size-10">
                            <Image src="/assets/icons/Snnopro/SPF.png" alt="icons" width={30} height={30} />
                        </div>
                        <div className="w-[80%]">
                            <p className="sm:text-xl text-black text-md font-bold font-mono">SPF</p>
                            <p className="sm:text-sm text-[12px] text-orange-700">
                                It provide upto 60+ sun protection factor from UV rays
                            </p>
                        </div>
                    </div>
                </div>

                {/* ///////// main image */}
                <div className="flex justify-center items-start ">
                    <Image src="/assets/highlight-products/snnopro.png" alt="kimsoft" width={100} height={300}
                        className="sm:w-[170px] sm:h-[390px] w-[140px] h-[320px] object-contain" />
                </div>


                {/* /////////---right side details*/}
                <div className="sm:flex flex-col gap-y-9 items-start justify-center hidden">
                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-orange-500 rounded-full sm:w-[50px] sm:h-[50px] size-10">
                            <Image src="/assets/icons/Snnopro/recommanded.png" alt="icons" width={40} height={40} />
                        </div>
                        <div className="">
                            <p className="text-xl font-bold text-black font-mono">Recommended</p>
                            <p className="text-sm text-orange-700  w-[70%]">This product is recommand for all type skin</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-orange-500 rounded-full sm:w-[50px] sm:h-[50px] size-10">
                            <Image src="/assets/icons/Snnopro/UVA.png" alt="icons" width={40} height={40} />
                        </div>
                        <div className="">
                            <p className="text-xl text-black font-bold font-mono">100% Original</p>
                            <p className="text-sm text-orange-700 w-[70%]">All the Product are 100% real and Fresh</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-orange-500 rounded-full sm:w-[50px] sm:h-[50px] size-10">
                            <Image src="/assets/icons/Snnopro/sunburn.png" alt="icons" width={30} height={30} />
                        </div>
                        <div className="w-[80%]">
                            <p className="sm:text-xl text-black text-md font-bold font-mono">Sun Burn</p>
                            <p className="sm:text-sm text-[12px] text-orange-700">
                                It protect your skin from sun radition, that make your skin dead
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Snnopro