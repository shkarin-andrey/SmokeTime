import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { iDataItem } from '../../type/shopData'

export interface CartState {
  cart: iDataItem[]
  count: number
}

const initialState: CartState = {
  cart: [],
  count: 1
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartActions: (state: CartState, action: PayloadAction<iDataItem[]>) => {
      state.cart = [...action.payload]
    },
    countActions: (state: CartState, action: PayloadAction<number>) => {
      state.count = action.payload
    },
  },
})

export const { cartActions, countActions } = cartSlice.actions
export default cartSlice.reducer
