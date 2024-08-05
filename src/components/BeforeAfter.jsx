"use client"
import BeforeAfterData from "../../data/BeforeAfterData.json"
import Image from 'next/image'
const BeforeAfter = () => {
    return (
        <div className="min-h-[90vh] flex justify-center items-center flex-col gap-y-9">
            <div className="w-fit">
                <h1 className="sm:text-3xl text-2xl font-semibold font-madimi"> See How Effectively They Works </h1>
                <p className="text-md font-mono text-center mb-5 mt-2 text-black/60 dark:text-gray-400">Place your order Now</p>
            </div>

            <div className="flex flex-wrap gap-5 sm:justify-evenly justify-center">
                {BeforeAfterData.map((images, index) => (
                    <Image src={images.imgSrc} key={index} alt='before  after picutres' width={300} height={300} className="border rounded-xl hover:scale-110 transition-all border-rose-500 sm:w-[250px] sm:h-[300px] w-[150px] h-[200px]" />

                ))}
            </div>
        </div>
    )
}

export default BeforeAfter