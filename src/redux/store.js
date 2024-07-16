import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice/CartSlice'
import { loadingSlice } from './slice/loadingSlice'
import { productSlice } from './slice/productSlice'


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        loadingSlice,
        product: productSlice.reducer,
    }
})


