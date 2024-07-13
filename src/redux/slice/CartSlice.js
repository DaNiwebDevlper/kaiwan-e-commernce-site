const { createSlice } = require("@reduxjs/toolkit");
const initialState = []
export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
                state.push(action.payload)
            } else {
                return state.map((item) => {
                    return item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                })
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload
            return state.filter((item) => item.id !== id)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer