import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const CartCounter = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    return (
        <div className="relative">
            <FaShoppingCart className="text-2xl" />
            {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalQuantity}
                </span>
            )}
        </div>
    );
};

export default CartCounter;
