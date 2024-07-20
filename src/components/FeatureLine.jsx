import { AiFillSafetyCertificate } from "react-icons/ai"
import { TbTruckDelivery } from "react-icons/tb";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { SlSpeech } from "react-icons/sl";
const FeatureLine = () => {
    return (
        <div className='w-full bg-red-100 font-madimi border-black text-black  sm:px-5 px-2 min-h-[70px] flex sm:gap-x-5 gap-x-2 flex-wrap gap-y-3 sm:justify-around items-center'>
            <div className="flex   gap-2 sm:text-xl text-sm sm:px-5 px-2 items-center border-black">
                <AiFillSafetyCertificate className="sm:text-4xl text-2xl text-green-500" /> <p>Safety</p>
            </div>
            <div className="flex  gap-2 sm:text-xl text-sm  sm:px-5 px-2 items-center border-black">
                <SlSpeech className="sm:text-3xl text-xl text-red-500" /> <p> 24/7 support</p>
            </div>
            <div className="flex  gap-2 sm:text-xl text-sm  sm:px-5 px-2 items-center border-black">
                <RiVerifiedBadgeFill className="sm:text-3xl text-xl text-green-500" /> <p>Best Price </p>
            </div>
            <div className="flex gap-2 sm:text-xl text-sm sm:px-5 px-2 items-center border-black">
                <TbTruckDelivery className="sm:text-4xl text-2xl text-yellow-500" /> <p>Delivery all our Pakistan</p>
            </div>

        </div>
    )
}

export default FeatureLine