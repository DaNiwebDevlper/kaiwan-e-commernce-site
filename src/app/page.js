"use client"
import { ImageCarousel, CardCarousel } from "@/components";
import FeaturedProducts from "@/components/FeaturedProducts";
import { useState } from "react";
import banner from "../../data/banner.json"


export default function Home() {
  const [showCart, setShowCart] = useState(false)
  return (
    <>
      <ImageCarousel images={banner} />
      <FeaturedProducts />
    </>
  );
}
