"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeSwitcher from "./darkMode/ThemeSwitcher";
import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    const pathname = usePathname();
    const [nav, setNav] = useState(false);
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();


    //// handle user login data
    useEffect(() => {
        const userCookie = Cookies.get('user');
        if (userCookie) {
            setUser(JSON.parse(userCookie));
        }
    }, []);


    /// add logoout feature
    const handleLogout = () => {
        Cookies.remove('token');
        Cookies.remove('user');
        setUser(null);
        router.push('/');
    };

    const links = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <div className="w-full h-8 bg-red-500 text-white sm:text-lg text-[10px] font-madimi flex justify-center items-center gap-2">
                <p>Now Cash on delivery available. All Over Pakistan</p>
                <TbTruckDelivery className="text-2xl text-yellow-400" />
            </div>
            <div className="w-full backdrop-blur-sm sticky z-20 top-0 flex sm:justify-around justify-between sm:px-0 items-center min-h-[68px] dark:bg-black/20 bg-white/40">

                {/* ////--Logo image */}
                <div className="">
                    <Image src="/assets/products/logo.png" alt="logo" height={50} width={50} className="hidden sm:block w-[60px] text-white py-0 my-0" />
                </div>

                {/* /////////////////---NavLinks for desktop---////////////////// */}
                <ul className="hidden sm:flex dark:text-white">
                    {links.map((link) => {
                        const isActive = pathname.endsWith(link.href);
                        return (
                            <li
                                key={link.href}
                                className={`nav-links px-4 cursor-pointer capitalize font-medium text-md link-underline
                            `}
                            >
                                <Link href={link.href}
                                    className={`${isActive ? "text-rose-400 font-bold" : ""}`}>{link.name}</Link>
                            </li>
                        );
                    })}
                </ul>

                {/* ///////////////---NavLinks for Mobile---///////////////////// */}
                <div onClick={() => setNav(!nav)} className="cursor-pointer pr-[150px] z-40 text-gray-500 sm:hidden">
                    {nav ? <FaTimes size={25} className="text-rose-500" /> : <FaBars className="text-rose-500" size={25} />}
                </div>

                {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full min-h-screen dark:bg-slate-900 bg-slate-100 text-gray-800 z-20">
                        {links.map((link) => {
                            const isActive = pathname.endsWith(link.href);
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
                            );
                        })}
                    </ul>
                )}

                {/* ////---Add to cart button and darkMode/LightMode button */}

                <div className="flex gap-4 items-center mr-5">
                    <MdShoppingCart className="text-2xl cursor-pointer" />
                    <ThemeSwitcher />

                    {/* /// if the user not login then shows these buttons */}
                    {!user ? (
                        <>
                            <Link href="/register">
                                <button className="text-md font-semibold font-madimi px-4 py-2 border rounded-lg text-white bg-rose-500 active:scale-90  hover:bg-rose-700 cursor-pointer hidden sm:block">Register</button>
                            </Link>
                            <Link href="/login">
                                <button className="sm:text-md text-sm font-semibold font-madimi px-6 py-2 border rounded-lg active:scale-90  border-rose-500 cursor-pointer">Login</button>
                            </Link>
                        </>
                    ) : (
                        ////////---if the user login then show this profile icon and drop down menu to logout and see userName and Email
                        <div className="relative">
                            <CgProfile
                                className="w-fit h-10 rounded-full cursor-pointer"
                                onClick={() => setShowDropdown(!showDropdown)} />
                            {showDropdown && (
                                <div className="absolute border  right-0 mt-2 w-fit bg-slatte-100 rounded-lg shadow-lg dark:bg-[#222] bg-slate-100">
                                    <div className="p-5">
                                        <p className="text-sm font-medium text-gray-400  dark:text-slate-400 flex gap-2 items-center">Name: <span className="dark:text-white/80 text-black/80 font-normal">{user.name}</span></p>
                                        <p className="text-sm font-medium text-gray-400  dark:text-slate-400 flex gap-2 items-center">Email: <span className="dark:text-white/80 text-black/80 font-normal">{user.email}</span></p>
                                    </div>
                                    <div className="border-t border-gray-200 dark:border-gray-700"></div>
                                    <button
                                        className="block w-full text-left px-4 py-2 text-sm text-rose-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
