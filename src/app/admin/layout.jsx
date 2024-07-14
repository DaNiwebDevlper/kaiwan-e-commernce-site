"use client"
import SideBar from "../../components/admin-panel/SideBar"

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