import { configureStore } from '@reduxjs/toolkit';
import userReducer from './useSlice'

const store = configureStore({
  reducer: {
    sliceName: userReducer
  }
})
export default store;