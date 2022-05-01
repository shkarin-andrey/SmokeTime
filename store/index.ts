import { configureStore } from "@reduxjs/toolkit";
import shopFilter from './reducers/filter';
import shopCart from './reducers/cart';

const store = configureStore({
  reducer: { shopFilter, shopCart },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;