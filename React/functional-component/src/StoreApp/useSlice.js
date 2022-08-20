import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialValOfState = {
    isLoggedIn: false,
    products: [],
    currUser: 'Dummy'
}
const productSlice = createSlice({
    name: 'products',
    initialState: {
        value: initialValOfState
    },
    reducers: {
        toggleUser: (state, action) => {
            console.log("action", action);
            state.value.currUser = action.payload.user
            state.value.isLoggedIn = !state.value.isLoggedIn
        }
    },
    extraReducers: {

    }
})
export const {toggleUser} = productSlice.actions;
export default productSlice.reducer;
