import { configureStore } from "@reduxjs/toolkit";
import shopFilter from './reducers/index';

const store = configureStore({
  reducer: { shopFilter },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;