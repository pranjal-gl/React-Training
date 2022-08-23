import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk('/ReactExpressApp/getProduct', async () => {
    try {
        const res = await axios.get("http://localhost:3002/products");
        console.log(res.data);
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
});

const initialValOfState = {
    products: [],
}
const productSlice = createSlice({
    name: 'products',
    initialState: {
        value: initialValOfState
    },
    reducers: {
    },
    extraReducers: {
        [getProduct.fulfilled] : (state, action) => {
            state.value.products = [...action.payload]
        }
    }
})
export default productSlice.reducer;
