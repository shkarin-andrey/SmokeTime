import { createReducer } from "@reduxjs/toolkit"
import { CartState } from "../../type/cart"
import { sumCart, addCart, countCart } from '../actions/cart'

const initialState: CartState = {
  sum: '',
  count: 0,
  cart: []
}

const shopCart = createReducer(initialState, builder => {
  builder
    .addCase(sumCart, (state, action) => {
      state.sum = action.payload
    })
    .addCase(countCart, (state, action) => {
      state.count = action.payload
    })
    .addCase(addCart, (state, action) => {
      state.cart.push(action.payload)
    })
    .addDefaultCase(() => { })
})

export default shopCart