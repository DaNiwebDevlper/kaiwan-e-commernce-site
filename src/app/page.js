import { ImageCarousel, FeatureLine, Banner, Kimsoft, Amaizax } from "@/components";
import FeaturedProducts from "@/components/FeaturedProducts";
import banner from "../../data/banner.json"

export default function Home() {

  return (
    <>
      <ImageCarousel images={banner} />
      <FeatureLine />
      <FeaturedProducts />
      <Kimsoft />
      <Banner />
      <Amaizax />

    </>
  );
}
