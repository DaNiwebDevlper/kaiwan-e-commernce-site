import Image from "next/image";
import { AiOutlineSend } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi"
import { ImLocation } from "react-icons/im"
const Contact = () => {

    // var imageStyle = {
    //     background:
    //         'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1)), url("/assets/bg-contnet2.svg") no-repeat',
    //     backgroundSize: "cover",
    //     width: "100%",
    //     height: "100%",
    //     backgroundPosition: "center",

    //     // Adjust the height as needed
    // };

    return (
        <div className="flex flex-col justify-center items-center">
            <Image src="/assets/banner.jpg" width={500} height={300} alt="banner" className="w-[90%] shadow-lg mt-5 rounded-2xl h-full mb-9" />
            <section className="flex flex-col-reverse sm:flex-row gap-5 justify-center items-center min-h-screen p-5" >

                {/* //////// --- Google Map --- //////// */}
                <div className="sm:w-[40%] w-full min-h-[500px] bg-slate-700">Google map</div>

                <div className="flex flex-col gap-y-7 w-full sm:w-[55%]  px-7">
                    <h1 className="sm:text-3xl font-madimi font-bold text-2xl title-font">
                        Ask us anything
                    </h1>
                    <p className="leading-relaxed sm:w-[70%] text-md text-black/60 dark:text-slate-400">
                        We are available for our customer 24/7 to provide complete satisfaction and proper service to our customer .Feel free to ask anything you need.
                    </p>

                    {/* /////// --- Contact Form --- //////// */}
                    <form className="flex flex-wrap">

                        <div className="flex sm:flex-row flex-col gap-y-5  gap-x-5 items-center w-full">
                            <div className="w-full">
                                <label for="name" className="leading-7 text-md pl-1 text-gray-600 font-semibold">
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
                                    for="email"
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
                                for="message"
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
        </div>
    )
}

export default Contact