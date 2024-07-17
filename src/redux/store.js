import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slice/CartSlice'
import { loadingSlice } from './slice/loadingSlice'
import { productSlice } from './slice/productSlice'


export const store = configureStore({
    reducer: {
        cart: CartSlice,
        loadingSlice,
        product: productSlice.reducer,
    }
})


