import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    totalQuantity: 0,
    totalCost: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cart.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.cart.push({ ...newItem, quantity: 1 });
            } else {
                existingItem.quantity++;
            }
            state.totalQuantity++;
            state.totalCost += newItem.price;
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.cart.find(item => item.id === id);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.cart = state.cart.filter(item => item.id !== id);
                } else {
                    existingItem.quantity--;
                }
                state.totalQuantity--;
                state.totalCost -= existingItem.price;
            }
        },
        clearCart: (state) => {
            state.cart = [];
            state.totalQuantity = 0;
            state.totalCost = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
