import { configureStore } from "@reduxjs/toolkit";
import shopFilter from './reducers/filter';
import openModalReducer from "./reducers/modal";

const store = configureStore({
  reducer: { shopFilter, openModalReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;