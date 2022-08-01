import { configureStore } from "@reduxjs/toolkit";
import alertInfoReducer from "./reducers/alertInfo";
import openModalReducer from "./reducers/modalSlice";
import checkYearReducer from './reducers/checkYearSlice';
import filterReducer from "./reducers/filterSlice";
import shopReducer from "./reducers/shopSlice";
import cartReducer from "./reducers/cartSlice";

const store = configureStore({
  reducer: {
    shopFilter: filterReducer,
    openModal: openModalReducer,
    alertInfo: alertInfoReducer,
    checkYear: checkYearReducer,
    shop: shopReducer,
    cart: cartReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch