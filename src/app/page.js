import { ImageCarousel, Banner, Snnopro, Amaizax, BeforeAfter } from "@/components";
import FeaturedProducts from "@/components/FeaturedProducts";
import banner from "../../data/banner.json";
import { user_review_data } from "../../data/user-review-data";
import TestimonialSlider from "@/components/TestimonialSlider";
export default function Home() {

  return (
    <>
      <ImageCarousel images={banner} />
      <FeaturedProducts />
      <Amaizax />
      <Banner />
      <BeforeAfter />
      <Snnopro />
      <TestimonialSlider testimonials={user_review_data} />
    </>
  );
}
