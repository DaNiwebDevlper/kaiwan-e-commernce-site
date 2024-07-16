"use client"
import { removeFromCart, addToCart } from '../../redux/slice/CartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';

const CartPage = () => {
    const items = useAppSelector(state => state.cart.items);
    const dispatch = useAppDispatch();

    const handleIncrease = (item) => {
        if (item.productQuantity > item.quantity) {
            dispatch(addToCart(item));
        } else {
            alert('Cannot increase quantity, out of stock.');
        }
    };

    const handleDecrease = (item) => {
        dispatch(removeFromCart(item.id));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.id} className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <div>
                                <button onClick={() => handleDecrease(item)} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
                                <button onClick={() => handleIncrease(item)} className="bg-green-500 text-white px-2 py-1 rounded ml-2">+</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartPage;
