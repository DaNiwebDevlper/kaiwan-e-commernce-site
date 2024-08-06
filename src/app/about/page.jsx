import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='min-h-screen p-5'>
            <Image src="/assets/about.png" width={500} height={300} alt='banner' className='w-full rounded-2xl shadow-lg' />
            <div className="my-5 flex justify-center items-center flex-col gap-y-9">
                <div className="my-5 flex justify-center items-center flex-col">
                    <h1 className='sm:text-4xl text-3xl font-madimi heading font-semibold text-center my-7'>About our brand</h1>
                    <p className='text-lg font-sans sm:w-[50%] text-center text-black/70 dark:text-slate-400 '>Your trusted partner in advanced derma skincare, hair care, and innovative healthcare solutions. At Kaiwan Pharma, we are dedicated to enhancing your beauty, well-being, and quality of life with our meticulously crafted and scientifically formulated products. Designed to meet the highest standards of quality, safety, and efficacy, our offerings are tailored to help you look and feel your best.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
                    <Image src="/assets/mission.jpg" width={500} height={400} alt='our mission' className='rounded-2xl shadow-md' />
                    <div className="sm:w-[50%]">
                        <h2 className='text-3xl text-center sm:text-left font-madimi font-semibold my-5'>Our Mission
                        </h2>
                        <p className='text-md text-center sm:text-left text-black/70 dark:text-slate-400'>We have a passion for providing our customers with the very best products, We work hard to deliver excellence in everything we do - in our customer service, how we work together, and the products we deliver. Being ethical in all aspects of our business is a priority for us</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
                    <div className="sm:w-[50%]">
                        <h2 className='text-3xl text-center sm:text-left font-madimi font-semibold my-5'>ViSiON
                        </h2>
                        <p className='text-md text-center sm:text-left text-black/70 dark:text-slate-400'>To be the most influential natural skin care company in the world. Our ambition is not to be the biggest skin care company, what drives us is sharing the knowledge necessary to make great natural skin care products.</p>
                    </div>
                    <Image src="/assets/vision.png" width={450} height={400} alt='our mission' className='rounded-2xl shadow-md object-cover ' />
                </div>

                <div className="flex flex-col gap-y-5 sm:w-[60%]">
                    <h2 className='text-3xl text-center font-madimi font-semibold uppercase'>Our Values</h2>
                    <p className='dark:text-slate-400 text-left text-black/70'><span className='text-xl font-semibold dark:text-slate-300 text-black/80'>Salvation :</span> We believe in the power of healing and restoration. Our products are designed to rejuvenate and revitalize, bringing renewed health and vitality to your skin and body.
                    </p>

                    <p className='dark:text-slate-400 text-left text-black/70'><span className='text-xl font-semibold dark:text-slate-300 text-black/80'>Integrity :</span> We operate with honesty, transparency, and integrity in all our dealings, building trust with our customers, partners, and stakeholders.

                    </p>

                    <p className='dark:text-slate-400 text-left text-black/70'><span className='text-xl font-semibold dark:text-slate-300 text-black/80'>Customer Focus :</span> Our customers are at the center of everything we do. We strive to understand their needs and provide solutions that enhance their health and well-being
                    </p>

                    <p className='dark:text-slate-400 text-left text-black/70'><span className='text-xl font-semibold dark:text-slate-300 text-black/80'>Quailty :</span> Our commitment to quality ensures that every product we offer is safe, effective, and manufactured to the highest standards.
                    </p>

                    <p className='dark:text-slate-400 text-left text-black/70'><span className='text-xl font-semibold dark:text-slate-300 text-black/80'>Wisdom :</span> We value the wisdom gained through experience and knowledge. Our products are developed with a deep understanding of skincare and healthcare needs, ensuring they deliver effective and lasting results.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About