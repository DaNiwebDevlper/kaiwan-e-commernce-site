"use client"
import { addToCart } from '@/redux/cartSlice';
import { useAppDispatch } from '@/redux/hooks/hooks';

const AddToCartButton = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (product.productQuantity > 0) {
      dispatch(addToCart(product));
    } else {
      alert('This product is out of stock.');
    }
  };

  return (
    <button onClick={handleAddToCart} className="bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
  );
};

export default AddToCartButton;
