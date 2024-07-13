import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slice/CartSlice'
import { loadingSlice } from './slice/loadingSlice'
import { productSlice } from './slice/productSlice'


export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        loading: loadingSlice.reducer,
        product: productSlice.reducer,
    }
})


