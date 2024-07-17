import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";
import { MdPhone } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-black to-gray-800">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="sm:flex sm:justify-around">


                    {/* //////////////---Footer Links---//////////////// */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div className="flex gap-2 justify-center ">
                            <Image src="/assets/products/logo.png" width={40} height={40} alt="logo" className="w-[50px] h-[50px]" />
                            <p className="text-xl font-madimi text-white/70  pt-5">Kaiwan Pharma</p>
                        </div>
                        <div className="">
                            <h2 className="mb-2 md:text-lg  font-semibold uppercase text-white">
                                Categories
                            </h2>
                            <ul className="text-gray-400 font-normal ">
                                <li className="mb-2 hover:underline transition-all">
                                    <Link href="/prodcut"
                                    >Whitening</Link>
                                </li>
                                <li className="mb-2 hover:underline transition-all">
                                    <Link href="/product"
                                    >Sunblock</Link>
                                </li>

                                <li className="mb-2 hover:underline transition-all">
                                    <Link href="/prodcut"
                                    >Acne</Link>
                                </li>
                            </ul>
                        </div>

                        {/* ///////////---Many_More_SEction---/////////////////////// */}


                        <div className="">
                            <h2 className="mb-2 md:text-lg font-semibold uppercase text-white">
                                Quick Access
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-2 hover:underline transition-all">
                                    <p className="flex gap-1 items-center"><MdPhone className="text-xl text-white/80" />: <Link href="tel:+923704381300" className="text-md">+923704381300</Link></p>

                                </li>
                                <li className="text-white/80 font-semibold">Email: <Link href="mailto:kaiwanpharma@gmail.com" className="text-gray-400" target="_blank">kaiwanpharma@gmail.com</Link></li>

                            </ul>
                        </div>


                        <div>
                            <h2 className="mb-4 sm:text-lg font-semibold  uppercase text-white">
                                Legal
                            </h2>
                            <ul className=" text-gray-400">
                                <li className="mb-2">
                                    <Link href="/" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li className="mb-2 hover:underline transition-all font-semibold text-white/80">
                                    Adress:  <Link href="https://www.google.com/maps/place/Kaiwan+Pharma/@31.412771,73.1034335,15z/data=!4m6!3m5!1s0x392269077445bbb9:0x3412483ac999ed74!8m2!3d31.412771!4d73.1034335!16s%2Fg%2F11y5by9nfr?entry=ttu" target="_blank" className="font-normal text-gray-400">Plot 1432, Pilot Ground Block B people's Colony No 1, Faisalabad Punjab, Pakistan</Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

                {/* //////////////---Socail Links---//////////////// */}

                <div className="flex sm:items-center sm:justify-between px-5 flex-wrap-reverse gap-5 md:gap-0">
                    <span className="text-lg text-gray-500 sm:text-center font-semibold dark:text-gray-200">
                        © 2024{" "}
                        <Link href="/" className="hover:underline">
                            kaiwan Pharma
                        </Link>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        {/* ///////////--YouTube--///////// */}

                        {/* ///////////--FaceBook--///////// */}
                        <Link href="https://www.facebook.com/kaiwanpharma?mibextid=ZbWKwL" className="w-[30px] rounded-full bg-white/90 h-[30px] flex justify-center items-center hover:bg-black/70 duration-300 cursor-pointer" target="_blank">
                            <BsFacebook className="text-[22px] text-sky-900" />
                        </Link>

                        {/* ///////////--Twitter--///////// */}
                        <Link href="https://www.tiktok.com/@kaiwanpharma" className="w-[30px] rounded-full bg-white/90 h-[30px] flex justify-center items-center hover:bg-black/70 duration-300 cursor-pointer" target="_blank">
                            <BsTiktok className="text-[22px] text-sky-500" />
                        </Link>
                        {/* ///////////--Instagram--///////// */}
                        <Link href="https://www.instagram.com/kaiwan_pharma?igsh=Z2VpZWFveXM0ajhx" className="w-[30px] rounded-full bg-white/90 h-[30px] flex justify-center items-center hover:bg-black/70 duration-300 cursor-pointer" target="_blank">
                            <BsInstagram className="text-[20px] text-rose-500" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
