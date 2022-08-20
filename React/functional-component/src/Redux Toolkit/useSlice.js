import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUser = createAsyncThunk('/Redux Toolkit/fetchUser', async () => {
    try {
        const res = await axios.get('http://localhost:3001/empDetails');
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
})

export const createUser = createAsyncThunk('/Redux Toolkit/createUser', async (val) => {
    try {
        const res = await axios.post('http://localhost:3001/empDetails', val);
        return res.data;   
    }
    catch(err) {
        console.log(err);
    }
})

export const deleteUser = createAsyncThunk('/Redux Toolkit/createUser/', async (val) => {
    try {
        const res = await axios.delete(`http://localhost:3001/empDetails/${val}`);
        return res.data;
    } catch(err) {
        console.log(err);
    }
})

export const modifyUser = createAsyncThunk('/Redux Toolkit/createUser/', async (val) => {
    try {
        const res = await axios.patch(`http://localhost:3001/empDetails/${val.id}`, val);
        return res.data;
    } catch(err) {
        console.log(err);
    }
})


const initialValOfState = {
    usersData: [],
    loading: true
}

const userSlice = createSlice({
    name: 'sliceName',
    initialState: {
        value: initialValOfState
    }, 
    reducers: {
        removeUser: (state, action) => {
            console.log(action.payload.id);
            state.value.usersData = state.value.usersData.filter((item)=>item.id !== action.payload.id);
        },
        updateUser: (state, action) => {
            console.log(action.payload);
            let result = state.value.usersData.find((item)=>item.id == action.payload.id);
            result.fname = action.payload.fname;
            result.email = action.payload.email;
            result.phone = action.payload.phone;
        }
    },
    extraReducers: {
        [fetchUser.fulfilled]: (state, action) => {
            state.value.loading = false;
            state.value.usersData = [...action.payload];
        }
    }
})

export const {removeUser, updateUser} = userSlice.actions;
export default userSlice.reducer;