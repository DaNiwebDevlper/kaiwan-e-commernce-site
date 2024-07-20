"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { CardCarousel } from ".";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { setLoading } from "@/redux/slice/loadingSlice";

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const dispatch = useAppDispatch()
    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            dispatch(setLoading(true))
            try {
                await axios.get("/api/get_featured_products").then((res) => setFeaturedProducts(res.data))
                    .catch((err) => console.log(err))
                    .finally(() => dispatch(setLoading(false)));

            } catch (error) {
                console.error("Error fetching featured products:", error);
            }
        };

        fetchFeaturedProducts();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="sm:text-4xl text-3xl font-bold font-mono my-5 text-center">Featured Products</h1>

            <CardCarousel />

        </div>
    );
};

export default FeaturedProducts;
