import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    _id: "",
    productImage: "",
    fileKey: "",
    productCategory: "",
    productPrice: "",
    productName: ""
}

export const productSlice = createSlice({
    initialState,
    name: "productSlice",
    reducers: {
        setProduct: (state, action) => {
            return action.payload
        }
    }
})

export const { setProduct } = productSlice.actions;
export default productSlice.reducer