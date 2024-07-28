import Link from 'next/link'
import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaSquareFacebook } from 'react-icons/fa6'
import { MdPhone } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className='bg-gradient-to-t from-black p-5 to-gray-900 text-gray-400 border-t'>
            <h1 className='text-3xl text-white font-madimi text-center  my-9'>Kaiwan Pharma</h1>
            <div className="flex sm:justify-around items-start gap-y-9 w-full flex-wrap">
                {/* ////////---Social Links---////////// */}
                <div className="flex flex-col gap-y-5">
                    <h2 className='text-lg font-semibold font-madimi text-gray-200 text-center'>Quality with Innovation</h2>
                    <div className="flex gap-4 items-center">

                        <Link href="https://www.facebook.com/kaiwanpharma?mibextid=ZbWKwL" className="w-[40px] border h-[40px] flex justify-center items-center hover:bg-black/70 duration-300 cursor-pointer" target="_blank">
                            <FaSquareFacebook className="text-[25px] text-blue-500" />
                        </Link>

                        <Link href="https://www.tiktok.com/@kaiwanpharmaL" className="w-[40px] border h-[40px] flex justify-center items-center hover:bg-black/70 duration-300 cursor-pointer" target="_blank">
                            <FaTiktok className="text-[20px] hover:text-purple-800" />
                        </Link>

                        <Link href="https://www.instagram.com/kaiwan_pharma?igsh=Z2VpZWFveXM0ajhx" className="w-[40px] border h-[40px] flex justify-center items-center hover:bg-black/70 duration-300 cursor-pointer" target="_blank">
                            <FaInstagram className="text-[25px] text-rose-500" />
                        </Link>

                    </div>
                </div>

                {/* /////////---Contact Detail---////////// */}
                <div className="italic flex flex-col gap-y-3 sm:w-[30%] w-[80%]">
                    <p className='text-xl font-semibold font-madimi text-gray-200'>Contact Us</p>
                    <address>
                        <span className='text-rose-500 italic'>Address: </span>
                        <Link href="https://www.google.com/maps/place/Kaiwan+Pharma/@31.412771,73.1034335,15z/data=!4m6!3m5!1s0x392269077445bbb9:0x3412483ac999ed74!8m2!3d31.412771!4d73.1034335!16s%2Fg%2F11y5by9nfr?entry=ttu" target="_blank" className="font-normal text-gray-400">Plot 1432, Pilot Ground Block B people&apos;s Colony No 1, Faisalabad Punjab, Pakistan</Link>
                    </address>
                    <p className="text-rose-500 ">Email: <Link href="mailto:kaiwanpharma@gmail.com" className="text-gray-400" target="_blank">kaiwanpharma@gmail.com</Link></p>

                    <p className="flex gap-1 items-center"><MdPhone className="text-xl text-rose-700" />: <Link href="tel:+923704381300" className="text-md">+923704381300</Link></p>

                </div>


                {/* ///////////---Category---////////// */}
                <div className="flex flex-col gap-y-3">
                    <p className='text-xl font-semibold font-madimi text-gray-200 pb-2'>Collection</p>
                    <p className='font-mono text-md italic'>Whitning</p>
                    <p className='font-mono text-md italic'>Hair Care</p>
                    <p className='font-mono text-md italic'>Sunblock</p>


                </div>


            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="text-lg text-center text-gray-500 sm:text-center font-semibold dark:text-gray-200">
                © 2024{" "}
                <Link href="/" className="hover:underline">
                    kaiwan Pharma
                </Link>
                . All Rights Reserved.
            </span>
        </footer>
    )
}

export default Footer