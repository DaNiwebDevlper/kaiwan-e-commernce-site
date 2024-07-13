"use client"

import Login from "@/components/NextAuth/Login"
import { useAppSelector } from "@/redux/hooks/hooks"
import { useSession } from "next-auth/react"
import SideBar from "../../components/admin-panel/SideBar"
import AdminNavbar from "@/components/admin-panel/AdminNavbar"
import Loader from "@/components/admin-panel/Loader"


const layout = ({ children }) => {

    return (
        <div className="flex bg-slate-100 dark:bg-[#222] min-h-screen">
            <SideBar />
            <div className="w-full h-full">

                <div className="relative">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout