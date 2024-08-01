import { ImageCarousel, FeatureLine, Banner, Kimsoft, Amaizax, BeforeAfter } from "@/components";
import FeaturedProducts from "@/components/FeaturedProducts";
import banner from "../../data/banner.json";
import { User_review } from "@/components/ui/User_review";
import { user_review_data } from "../../data/user-review-data";
export default function Home() {

  return (
    <>
      <ImageCarousel images={banner} />
      {/* <FeatureLine /> */}
      <FeaturedProducts />
      <Kimsoft />
      <Banner />
      <BeforeAfter />
      <Amaizax />
      <div className="min-h-[80vh]">
        <h4 className="sm:text-3xl text-2xl font-semibold font-madimi text-center my-9  mt-12">Users Reviews</h4>
        <User_review items={user_review_data} speed="slow" />
      </div>

    </>
  );
}
