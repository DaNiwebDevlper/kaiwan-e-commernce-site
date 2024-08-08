"use client";
import Popup from "@/components/admin-panel/Popup";
import ProductRow from "@/components/admin-panel/ProductRow";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setLoading } from "@/redux/slice/loadingSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Loader from "@/components/admin-panel/Loader";

const Page = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [products, setProducts] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [updateTable, setUpdateTable] = useState(false);

    useEffect(() => {
        const user = Cookies.get("user");
        if (
            !user ||
            (JSON.parse(user).email !== "kaiwanpharma@gmail.com" &&
                JSON.parse(user).password !== "kaiwan134")
        ) {
            router.push("/");
        }
    }, [router]);

    useEffect(() => {
        dispatch(setLoading(true));
        axios
            .get("/api/get_products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
            .finally(() => dispatch(setLoading(false)));
    }, [updateTable, dispatch]);

    return (
        <div className="sm:p-4 p-1">
            <div className="dark:bg-black bg-white rounded-xl min-h-screen">
                <h1 className="sm:text-3xl text-2xl font-semibold font-madimi p-5">All Products</h1>
                <div className="w-full overflow-y-auto">
                    <table className="w-full overflow-y-auto">
                        <thead>
                            <tr className="font-thin py-3 text-black/60 dark:text-white/70 border-b text-left p-2">
                                <th className="hidden sm:block">Sr.no</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Picture</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <ProductRow
                                    key={product._id}
                                    srNo={index + 1}
                                    setOpenPopup={setOpenPopup}
                                    setUpdateTable={setUpdateTable}
                                    product={product}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {openPopup && <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable} />}
        </div>
    );
};

export default Page;