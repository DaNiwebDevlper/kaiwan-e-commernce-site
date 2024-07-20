"use client";
import { useAppSelector } from "@/redux/hooks/hooks";
import SideBar from "../../components/admin-panel/SideBar";
import Loader from "@/components/admin-panel/Loader";

const Layout = ({ children }) => {
    const isLoading = useAppSelector(store => store.loading);
    return (
        <div className="flex bg-slate-100 dark:bg-[#222] min-h-screen relative">
            <SideBar />
            <div className="w-full h-full relative">
                {children}
                {isLoading && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                        <Loader />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Layout;
