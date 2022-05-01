import { createAction } from "@reduxjs/toolkit";
import { iCart } from "../../type/cart";

export const sumCart = createAction<string>('SUM')
export const countCart = createAction<number>('COUNT')
export const addCart = createAction<iCart>('ADD_CART')