"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeSwitcher from "./darkMode/ThemeSwitcher";
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { SlHandbag } from "react-icons/sl";
import { IoPersonCircleSharp } from "react-icons/io5";
import { clearUser, selectUser, setUser } from "@/redux/slice/userLogin";

const Navbar = () => {
    const pathname = usePathname();
    const [nav, setNav] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();

    const cartItems = useAppSelector(state => state.cart.cart);
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser);
    useEffect(() => {
        const userCookie = Cookies.get('user');
        if (userCookie) {
            dispatch(setUser(JSON.parse(userCookie)));
        }
    }, [dispatch]);

    const handleLogout = () => {
        Cookies.remove('token');
        Cookies.remove('user');
        dispatch(clearUser());
        router.push('/login');
    };

    const links = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <div className="w-full h-8 bg-rose-600 text-white sm:text-lg text-[10px] font-mono flex justify-center items-center gap-2">
                <p>FREE Shipping on all orders above Rs. 2,000/-</p>
                <TbTruckDelivery className="text-2xl text-yellow-400" />
            </div>
            <div className="w-full backdrop-blur-sm sticky z-50 top-0 flex sm:justify-around justify-between sm:px-0 items-center min-h-[68px] dark:bg-black/20 bg-white/40">

                <Link href="/">
                    <Image src="/assets/logo.png" alt="logo" height={50} width={50} className="hidden sm:block w-[60px] text-white py-0 my-0" />
                </Link>

                <ul className="hidden sm:flex dark:text-white">
                    {links.map((link) => {
                        const isActive = pathname.endsWith(link.href);
                        return (
                            <li
                                key={link.href}
                                className={`nav-links px-4 cursor-pointer capitalize font-medium text-lg link-underline
                            `}
                            >
                                <Link href={link.href}
                                    className={`${isActive ? "text-rose-600 font-bold" : ""}`}>{link.name}</Link>
                            </li>
                        );
                    })}
                </ul>

                <div onClick={() => setNav(!nav)} className="cursor-pointer pr-[130px] z-40 text-gray-500 sm:hidden">
                    {nav ? <FaTimes size={25} className="text-rose-500" /> : <FaBars className="text-rose-500" size={25} />}
                </div>

                {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full min-h-screen dark:bg-[#222] bg-slate-100 text-gray-800 z-20">
                        {links.map((link) => {
                            const isActive = pathname.endsWith(link.href);
                            return (
                                <li
                                    key={link.href}
                                    className="px-4 cursor-pointer capitalize py-6 text-2xl z-20"
                                >
                                    <Link onClick={() => setNav(!nav)}
                                        className={`${isActive ? "text-rose-700 font-semibold" : "text-black/60 dark:text-white/80"}`}
                                        href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                )}

                <div className="flex gap-4 items-center mr-5">
                    <div className="flex">
                        <Link href="/viewCart">
                            <button className="text-2xl items-center">
                                <SlHandbag />
                            </button>
                        </Link>
                        {cartItems.length > 0 && <small className="text-rose-500 pt-1">({cartItems.length})</small>}
                    </div>
                    {/* /// dark mode */}
                    <ThemeSwitcher />

                    {!user ? (
                        <div className="flex items-center">
                            <Link href="/login">
                                <button className="text-md font-semibold font-madimi px-3 py-1 sm:border-r border-black/40 dark:border-white/50 active:scale-90 cursor-pointer">Login</button>
                            </Link>
                            <Link href="/register">
                                <button className="text-md font-semibold font-madimi px-3 py-1 active:scale-90 hidden sm:block cursor-pointer">Sign up</button>
                            </Link>
                        </div>
                    ) : (
                        <div className="relative">
                            <IoPersonCircleSharp
                                className="w-fit h-10 rounded-full cursor-pointer"
                                onClick={() => setShowDropdown(!showDropdown)} />
                            {showDropdown && (
                                <div className="absolute border right-0 mt-2 w-fit bg-slate-100 rounded-lg shadow-lg dark:bg-[#222]">
                                    <div className="p-5">
                                        <p className="text-sm font-medium text-gray-400 dark:text-slate-400 flex gap-2 items-center">Name: <span className="dark:text-white/80 text-black/80 font-normal">{user.name}</span></p>
                                        <p className="text-sm font-medium text-gray-400 dark:text-slate-400 flex gap-2 items-center">Email: <span className="dark:text-white/80 text-black/80 font-normal">{user.email}</span></p>
                                        {user.email === "kaiwanpharma@gmail.com" && <Link onClick={() => setShowDropdown(!showDropdown)} href="/admin/dashboard" className="text-sm py-1 mt-2 text-center">Admin Page</Link>}
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
