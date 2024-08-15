
import Image from "next/image";

const Amaizax = () => {

    return (
        <div className="flex justify-center bg-rose-200 items-center sm:min-h-[85vh] w-full min-h-[60vh] my-9">
            <div className='sm:w-[90%] w-[95%] flex justify-center items-center gap-3 sm:p-9 p-3'>

                {/* ///////////////////////////// */}
                <div className="flex flex-col sm:gap-y-9 gap-y-3 items-start justify-center pl-9 sm:w-[30%] w-[60%]">
                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-rose-500 rounded-full sm:w-[50px] sm:h-[50px] size-10">
                            <Image src="/assets/icons/Nuehair/hair-growth.png" alt="icons" width={40} height={40} />
                        </div>
                        <div className="w-[80%]">
                            <p className="sm:text-xl text-black text-md font-bold font-mono">Hair Growth</p>
                            <p className="sm:text-sm text-[12px] text-rose-600">Formulated with Biotin Promote Hair Growth in a week</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-rose-500 rounded-full sm:w-[50px] sm:h-[50px] size-10">
                            <Image src="/assets/icons/Nuehair/repair.png" alt="icons" width={35} height={35} />
                        </div>
                        <div className="w-[80%]">
                            <p className="sm:text-xl text-black text-md font-bold font-mono">Repair</p>
                            <p className="sm:text-sm text-[12px] text-rose-600">Improve Hair Thininig and Repair Damaged Hair</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-rose-500 rounded-full sm:w-[50px] sm:h-[50px] size-10">
                            <Image src="/assets/icons/Nuehair/hair-fall.png" alt="icons" width={40} height={40} />
                        </div>
                        <div className="w-[80%]">
                            <p className="sm:text-xl text-black text-md font-bold font-mono">Hair Fall</p>
                            <p className="sm:text-sm text-[12px] text-rose-600">Control Hair fall and enhance hair growth</p>
                        </div>
                    </div>
                </div>

                {/* //////////--Product Image--////////// */}
                <div className="flex sm:justify-center items-center w-[30%]">
                    <Image src="/assets/highlight-products/Nuehair.png" alt="Amaizax" width={300} height={300} loading="lazy"
                        className="sm:w-[200px] sm:h-[400px] w-[140px] h-[350px] object-contain" />
                </div>
                {/* ///////////--right side of product details */}
                <div className="sm:flex flex-col gap-y-9 items-start justify-center hidden">

                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-rose-500 rounded-full sm:w-[50px] sm:h-[50px] size-10">
                            <Image src="/assets/icons/Nuehair/scalp.png" alt="icons" width={40} height={40} />
                        </div>
                        <div className="w-[80%]">
                            <p className="sm:text-xl text-black text-md font-bold font-mono">scalp</p>
                            <p className="sm:text-sm text-[12px] text-rose-600">Improve Scalp and roots health</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-rose-500 rounded-full sm:w-[50px] sm:h-[50px] size-10">
                            <Image src="/assets/icons/Nuehair/safe.png" alt="icons" width={40} height={40} />
                        </div>
                        <div className="w-[80%]">
                            <p className="sm:text-xl text-black text-md font-bold font-mono">Safe & Easy</p>
                            <p className="sm:text-sm text-[12px] text-rose-600">Safe & Easy to use apply on hair roots</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="border flex justify-center items-center overflow-hidden border-rose-500 rounded-full sm:w-[50px] sm:h-[50px] size-10">
                            <Image src="/assets/icons/Nuehair/recomended.png" alt="icons" width={40} height={40} />
                        </div>
                        <div className="w-[80%]">
                            <p className="sm:text-xl text-black text-md font-bold font-mono">Recommended</p>
                            <p className="sm:text-sm text-[12px] text-rose-600">Trusted and Recommended by Dermatologists</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Amaizax