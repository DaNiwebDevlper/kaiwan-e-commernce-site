import React from 'react'
import { RiFunctionAddFill } from "react-icons/ri";
import { MdShoppingCartCheckout } from "react-icons/md"
import { RiAccountPinBoxFill, RiSettingsLine } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const menu = [
    { title: "Product List", href: "/admin/dashboard", icon: <RiFunctionAddFill /> },
    { title: "Add Product", href: "/admin/addProducts", icon: <MdShoppingCartCheckout /> },
    { title: "Account", href: "/admin/account", icon: <RiAccountPinBoxFill /> },
    { title: "Transaction", href: "/admin/productList", icon: <BiTransfer /> },
    { title: "Setting", href: "/admin/productList", icon: <RiSettingsLine /> },
]

const SideBar = () => {
    return (
        <div className='sm:w-[300px] w-[100px] min-h-screen bg-white dark:bg-black'>

            <div className="flex flex-col pl-5 sm:p-5 gap-y-5 w-full mt-5">
                {menu.map((options) => {
                    const path = usePathname()
                    return (
                        <Link href={options.href} key={options.title}>
                            <div className={`sm:w-full w-fit rounded-lg  hover:bg-rose-200 items-center p-2 text-2xl sm:text-lg flex gap-2 text-black sm:px-3 sm:py-4 ${options.href == path ? " bg-rose-500 text-white" : "bg-slate-100 dark:bg-[#222] dark:text-white text-black"}`}> {options.icon} <span className='hidden sm:inline-block'
                            >{options.title}</span></div>
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}

export default SideBar