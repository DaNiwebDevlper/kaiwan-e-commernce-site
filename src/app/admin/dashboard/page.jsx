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
    const [saleProducts, setSaleProducts] = useState([]);
    const [nonSaleProducts, setNonSaleProducts] = useState([]);
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
            .then((res) => {
                const allProducts = res.data;
                setProducts(allProducts);

                // Separate products into on-sale and non-sale
                const saleItems = allProducts.filter(product => product.sale); // Assuming 'onSale' is the property
                const nonSaleItems = allProducts.filter(product => !product.sale);

                setSaleProducts(saleItems);
                setNonSaleProducts(nonSaleItems);
            })
            .catch((err) => console.log(err))
            .finally(() => dispatch(setLoading(false)));
    }, [updateTable, dispatch]);

    return (
        <div className="sm:p-4 p-1">
            <div className="dark:bg-black bg-white rounded-xl min-h-screen">
                <h1 className="sm:text-3xl text-2xl font-semibold font-madimi p-5">All Products</h1>

                <h2 className="text-2xl font-semibold p-5">On Sale</h2>
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
                            {saleProducts.map((product, index) => (
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

                <h2 className="text-2xl font-semibold p-5">Regular Products</h2>
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
                            {nonSaleProducts.map((product, index) => (
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
