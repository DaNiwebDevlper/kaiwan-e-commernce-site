import { ImageCarousel, CardCarousel } from "@/components";
import FeaturedProducts from "@/components/FeaturedProducts";

const banner = [
  { imgSrc: "/assets/landingPage.png", title: "Image1 title " },
  { imgSrc: "/assets/l1.png", title: "Image222 title " }
]

export default function Home() {
  return (
    <>
      <ImageCarousel images={banner} />
      <FeaturedProducts />
    </>
  );
}
