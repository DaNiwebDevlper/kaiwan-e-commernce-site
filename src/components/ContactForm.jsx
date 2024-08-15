"use client"
import { makeToast } from "@/utils/Helper";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { MdMarkEmailRead, MdPhone } from "react-icons/md";

const ContactForm = () => {

    const [success, setSuccess] = useState(false);

    const Ref = useRef();

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "0e3ea712-8a33-4620-bde0-9ed66c9ab218");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setSuccess("Success", res);
            makeToast("Your message is send successfully")
        }
    };


    ///////////---Web3Form-end---//////////////
    return (
        <div className="flex flex-col justify-center items-center" ref={Ref}>
            <Image src="/assets/contact.png" width={500} height={300} alt="banner" className="w-[90%] shadow-lg mt-5 rounded-2xl h-full mb-9" />
            <section className="flex flex-col-reverse sm:flex-row gap-5 justify-center items-center min-h-screen p-5" >

                {/* //////// --- Google Map --- //////// */}
                <div className="sm:w-[40%] w-[90%] min-h-[500px] overflow-hidden rounded-xl">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.22745965514!2d74.00471116800347!3d31.483103650703097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1722879190817!5m2!1sen!2s" className="w-full min-h-[500px]" loading="lazy" ></iframe>
                </div>

                <div className="flex flex-col gap-y-7 w-full sm:w-[55%]  px-7">
                    <h1 className="sm:text-3xl font-madimi font-bold text-2xl title-font">
                        Ask us anything
                    </h1>
                    <p className="leading-relaxed sm:w-[70%] text-md text-black/60 dark:text-slate-400">
                        We are available for our customer 24/7 to provide complete satisfaction and proper service to our customer .Feel free to ask anything you need.
                    </p>

                    {/* /////// --- Contact Form --- //////// */}
                    <form className="flex flex-wrap" onSubmit={onSubmit}>

                        <div className="flex sm:flex-row flex-col gap-y-5  gap-x-5 items-center w-full">
                            <div className="w-full">
                                <label htmlFor="name" className="leading-7 text-md pl-1 text-gray-600 font-semibold">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name..."
                                    className="w-full bg-white/40 dark:bg-slate-950 dark:text-slate-300 rounded border border-slate-300  focus:border-rose-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="w-full">

                                <label
                                    htmlFor="email"
                                    className="leading-7 text-md ml-1 text-gray-600 font-semibold"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter the email..."
                                    className="w-full bg-white/40 dark:bg-slate-950 dark:text-slate-300 rounded border border-slate-300  focus:border-rose-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>

                        </div>


                        <div className="w-full">
                            <label
                                htmlFor="message"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={7}
                                className="w-full bg-white/40 dark:bg-slate-950 dark:text-slate-300 rounded border border-slate-300  focus:border-rose-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>


                        <button className="flex w-full items-center justify-center gap-1 mx-auto text-white bg-rose-500 border-0 py-2 px-5 focus:outline-none transition-all hover:bg-rose-600 active:scale-90 rounded-lg text-center my-5 text-lg">
                            Send <AiOutlineSend />
                        </button>

                    </form>

                </div>
            </section>
            <div className="flex flex-col gap-y-5 sm:w-[55%] my-9">
                <div className="flex flex-col gap-y-3">
                    <address className="flex gap-1 items-center">
                        <span className='text-rose-500 text-2xl'><ImLocation /> </span>
                        <Link href="https://www.google.com/maps/place/lahore/data=!4m6!3m5!1s0x392269077445bbb9:0x3412483ac999ed74!8m2!3d31.412771!4d73.1034335!16s%2Fg%2F11y5by9nfr?entry=ttu" target="_blank" className="font-normal text-md dark:text-gray-400 text-slate-700">Lahore, Pakistan</Link>
                    </address>


                    <p className="text-rose-500 flex gap-1 pl-1 items-center"><MdMarkEmailRead className="text-xl" />  <Link href="mailto:kaiwanpharma@gmail.com" className="text-gray-700 dark:text-gray-400" target="_blank">kaiwanpharma@gmail.com</Link></p>

                    <p className="flex gap-1 items-center pr-9 text-gray-700 dark:text-gray-400"><MdPhone className="text-xl text-rose-700" /> <Link href="tel:+923704381300" className="text-md">+923704381300</Link></p>

                </div>

                <div className="flex gap-4 items-center justify-center">

                    <Link href="https://www.facebook.com/kaiwanpharma?mibextid=ZbWKwL" className="w-[40px] border border-black/70 dark:border-white h-[40px] flex justify-center items-center duration-300 cursor-pointer" target="_blank">
                        <FaSquareFacebook className="text-[25px] text-blue-500" />
                    </Link>

                    <Link href="https://www.tiktok.com/@kaiwanpharmaL" className="w-[40px] border h-[40px] flex justify-center border-black/70 dark:border-white items-center  duration-300 cursor-pointer" target="_blank">
                        <FaTiktok className="text-[20px] hover:text-purple-800" />
                    </Link>

                    <Link href="https://www.instagram.com/kaiwan_pharma?igsh=Z2VpZWFveXM0ajhx" className="w-[40px] border border-black/70 dark:border-white h-[40px] flex justify-center items-center  duration-300 cursor-pointer" target="_blank">
                        <FaInstagram className="text-[25px] text-rose-500" />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default ContactForm