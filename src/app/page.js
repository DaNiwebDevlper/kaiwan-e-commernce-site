import { ImageCarousel, FeatureLine, Banner, Kimsoft, Amaizax, BeforeAfter } from "@/components";
import FeaturedProducts from "@/components/FeaturedProducts";
import banner from "../../data/banner.json";
import { User_review } from "@/components/ui/User_review";
import { user_review_data } from "../../data/user-review-data";
import TestimonialSlider from "@/components/TestimonialSlider";
export default function Home() {

  return (
    <>
      <ImageCarousel images={banner} />
      {/* <FeatureLine /> */}
      <FeaturedProducts />
      <Amaizax />
      <Banner />
      <BeforeAfter />
      <Kimsoft />
      <TestimonialSlider testimonials={user_review_data} />


    </>
  );
}
