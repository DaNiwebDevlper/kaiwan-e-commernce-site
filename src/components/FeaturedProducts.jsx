"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { CardCarousel, ProductCard } from ".";

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await axios.get("/api/get_featured_products");
                setFeaturedProducts(response.data);
            } catch (error) {
                console.error("Error fetching featured products:", error);
            }
        };

        fetchFeaturedProducts();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold font-mono my-5 text-center">Featured Products</h1>

            <CardCarousel />

        </div>
    );
};

export default FeaturedProducts;
