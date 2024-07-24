
import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/product/productslice';

export const store = configureStore({
  reducer: {
    productStoreReducer: productReducer
  },
})

export default store









