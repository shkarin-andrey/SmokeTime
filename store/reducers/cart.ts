import { createReducer } from "@reduxjs/toolkit"
import { CartState } from "../../type/cart"
import { sumCart, addCart, countCart, deleteCart } from '../actions/cart'

const initialState: CartState = {
  sum: 0,
  count: 0,
  cart: []
}

const shopCart = createReducer(initialState, builder => {
  builder
    .addCase(sumCart, (state, action) => {
      state.sum = Number(action.payload)
    })
    .addCase(countCart, (state, action) => {
      state.count = action.payload
    })
    .addCase(addCart, (state, action) => {
      state.cart.push(action.payload)
      state.cart = state.cart.reduce((m: any, o: any) => {
        const found = m.find((p: any) => p.id === o.id);
        if (found) {
          found.count += o.count;
          found.sum += o.sum;
        } else {
          m.push(o);
        }
        return m;
      }, []);
    })
    .addCase(deleteCart, (state, action) => {
      state.cart = action.payload
    })
    .addDefaultCase(() => { })
})

export default shopCart