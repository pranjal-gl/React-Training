import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk('/StoreApp/getProduct', async () => {
    try {
        const res = await axios.get("http://localhost:3001/products");
        // console.log(res.data);
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
});

export const fetchCart = createAsyncThunk('/StoreApp/fetchCart', async () => {
    try {
        const res = await axios.get("http://localhost:3001/userCartData");
        // console.log(res.data);
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
});

export const addToCart = createAsyncThunk('/StoreApp/addToCart', async (item) => {
    // console.log(currUser);
    console.log(item);
    
    try {
        const res = await axios.post(`http://localhost:3001/userCartData`, item);
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
});

const initialValOfState = {
    isLoggedIn: false,
    products: [],
    currUser: 'Dummy',
    cartProd: []
}
const productSlice = createSlice({
    name: 'products',
    initialState: {
        value: initialValOfState
    },
    reducers: {
        toggleUser: (state, action) => {
            console.log("action", action);
            if(action.payload.password === 'admin') {
                state.value.currUser = action.payload.user
                state.value.isLoggedIn = !state.value.isLoggedIn
            }  
        }
    },
    extraReducers: {
        [getProduct.fulfilled] : (state, action) => {
            state.value.products = [...action.payload]
        },
        [fetchCart.fulfilled] : (state, action) => {
            // console.log(...action.payload);
            state.value.cartProd = [...action.payload]
        }
    }
})
export const {toggleUser} = productSlice.actions;
export default productSlice.reducer;
