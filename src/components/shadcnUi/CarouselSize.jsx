"use client"
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setLoading } from "@/redux/slice/loadingSlice";
import axios from "axios";
import { ProductCard } from "..";
import Loader from "../admin-panel/Loader";


export function CarouselSize() {
  const [products, setProducts] = React.useState([]);
  const dispatch = useAppDispatch();
  const loading = useAppSelector(store => store.loading)

  React.useEffect(() => {
    dispatch(setLoading(true));
    axios.get("/api/products")
      .then((res) => setProducts(res.data.filter(product => product.featured)))
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
  }, [dispatch]);
  return (
    <div className="w-full flex-col flex sm:min-h-[90vh] relative justify-center items-center">
      <div className="absolute z-40 top-1/2 left-1/2">
        {loading && <Loader />}
      </div>
      <Carousel
        opts={{
          align: "end",
        }}
        className="sm:w-[90%] w-[70%]"
      >
        <CarouselContent>
          {products.map((data, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 ">
              <ProductCard key={data._id} title={data.productName} price={data.productPrice} imgSrc={data.productImage} id={data._id} quantity={data.productQuantity} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
