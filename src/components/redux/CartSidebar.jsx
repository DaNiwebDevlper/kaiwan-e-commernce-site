"use client"
import { removeFromCart, clearCart } from "../../redux/slice/CartSlice";
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';

const CartSidebar = ({ isOpen, onClose }) => {
    const items = useAppSelector(state => state.cart.items);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleViewCart = () => {
        onClose();
        router.push('/cart');
    };

    return (
        <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-md transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
            <button onClick={onClose} className="absolute top-4 right-4">Close</button>
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Cart</h2>
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
                                <button onClick={() => handleRemove(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
                {items.length > 0 && (
                    <div className="mt-4">
                        <button onClick={handleViewCart} className="bg-blue-500 text-white px-4 py-2 rounded">View Cart</button>
                        <button onClick={() => dispatch(clearCart())} className="bg-red-500 text-white px-4 py-2 rounded mt-2">Clear Cart</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;
