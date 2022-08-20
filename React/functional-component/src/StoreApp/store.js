import { configureStore } from '@reduxjs/toolkit';
import productReducer from './useSlice'

const store = configureStore({
  reducer: {
    products: productReducer
  }
})
export default store;