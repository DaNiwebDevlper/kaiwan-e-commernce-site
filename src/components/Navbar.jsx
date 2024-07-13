"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeSwitcher from "./darkMode/ThemeSwitcher";
import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
    const pathname = usePathname()
    const [nav, setNav] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <div className="w-full h-8 bg-red-500 text-white sm:text-lg text-[10px] font-madimi flex justify-center items-center gap-2">
                <p> Now Cash on delivery available. All Over Pakistan</p>   <TbTruckDelivery className="text-2xl text-yellow-400" />
            </div>
            <div className="w-full backdrop-blur-sm  sticky z-20 top-0  flex sm:justify-around justify-between   sm:px-0 items-center min-h-[68px] dark:bg-black/20 bg-white/40">

                <div className="">

                    <Image src="/assets/products/logo.png" alt="logo" height={50} width={50} className="hidden sm:block w-[60px] text-white py-0 my-0" />

                </div>

                {/* /////////////////---NavLinks for desktop---////////////////// */}
                <ul className="hidden sm:flex dark:text-white">
                    {links.map((link) => {
                        const isActive = pathname.endsWith(link.href)
                        return (
                            <li
                                key={link.href}
                                className={`nav-links px-4 cursor-pointer capitalize font-medium text-md link-underline
                            `}
                            >
                                <Link href={link.href}
                                    className={`${isActive ? "text-rose-400 font-bold" : ""}`}>{link.name}</Link>
                            </li>
                        )
                    })}
                </ul>

                {/* ///////////////---NavLinks for Mobile---///////////////////// */}

                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-[120px] z-40 text-gray-500 sm:hidden"
                >
                    {nav ? <FaTimes size={25} className="text-rose-500" /> : <FaBars className="text-rose-500" size={25} />}
                </div>

                {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full min-h-screen dark:bg-slate-900 bg-slate-100 text-gray-800 z-20">
                        {links.map((link) => {
                            const isActive = pathname.endsWith(link.href)
                            return (
                                <li
                                    key={link.href}
                                    className="px-4 cursor-pointer capitalize py-6 text-2xl z-20"
                                >
                                    <Link onClick={() => setNav(!nav)}
                                        className={`${isActive ? "text-rose-500 font-semibold" : "text-black/60 dark:text-white/80"}`}
                                        href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                )}

                <div className="flex gap-4 items-center mr-5">
                    <MdShoppingCart className="text-2xl cursor-pointer" />
                    <ThemeSwitcher />
                    <Link href="/login">
                        <button className="text-md font-semibold font-madimi px-6 py-2 border rounded-lg hover:bg-rose-500 cursor-pointer border-black/30 dark:border-white/60">Login</button>
                    </Link>
                </div>

            </div>
        </>
    );
};

export default Navbar;