import { ImageCarousel, Banner, Snnopro, Amaizax, BeforeAfter } from "@/components";
import FeaturedProducts from "@/components/FeaturedProducts";
import banner from "../../data/banner.json";
import { user_review_data } from "../../data/user-review-data";
import TestimonialSlider from "@/components/TestimonialSlider";
import Head from "next/head";
export default function Home() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
