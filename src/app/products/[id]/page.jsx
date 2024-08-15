import ProductDetailsPage from "@/components/ProductDetailsPage";
import axios from "axios";

// export async function generateMetadata({ params }) {
//     try {
//         const baseUrl ="http://localhost:3000";

//         const response = await axios.get(`${baseUrl}/api/products/${params.id}`);
//         const product = response.data;

//         if (!product) {
//             return {
//                 title: "Page Not Found",
//                 description: "The page you are looking for does not exist.",
//             };
//         }

//         return {
//             title: product.productName || "Products",
//             description: product.productDetail || "Find the best products here!",
//             openGraph: {
//                 title: product.productName || "Products",
//                 description: product.productDetail || "Find the best products here!",
//                 images: [
//                     {
//                         url: product.productImage,
//                         alt: product.productName,
//                     },
//                 ],
//                 url: `${baseUrl}/products/${product._id}`,
//             },
//             twitter: {
//                 title: product.productName || "Products",
//                 description: product.productDetail || "Find the best products here!",
//                 images: [
//                     {
//                         url: product.productImage,
//                         alt: product.productName,
//                     },
//                 ],
//             },
//         };
//     } catch (error) {
//         console.error("Error generating metadata:", error.response ? error.response.data : error.message);

//         return {
//             title: "Error",
//             description: "An error occurred while generating the page metadata.",
//         };
//     }
// }

const ProductDetails = () => {
    return (
        <ProductDetailsPage />
    )
}

export default ProductDetails
