"use client"
import { useParams } from "next/navigation"
import productData from "../../../../data/productData.json"
import Image from "next/image"

const ProductDetail = () => {
    const params = useParams()
    return (
        <div className='min-h-screen flex flex-col justify-center items-center p-9'>
            {productData.map((product) => {
                return (params.id == product.id ?
                    <div className="flex gap-5">
                        <div className="sm:w-[40%]">
                            <Image src={product.productImage} alt="product img" width={400} height={400} />
                        </div>

                        <div className="sm:w-[60%] flex flex-col gap-y-5 justify-center">
                            <h1 className="text-2xl font-semibold font-madimi">{product.productName}</h1>
                            <p className="text-sm text-black/60 w-[80%] text-justify">{product.productDetail}</p>
                        </div>

                    </div> : ""
                )
            })}
        </div>
    )
}

export default ProductDetail