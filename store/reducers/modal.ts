import { createReducer } from "@reduxjs/toolkit";
import { openModalAction } from './../actions/modal';

const initialState = {
  showModal: false
}

const openModalReducer = createReducer(initialState, builder => {
  builder
    .addCase(openModalAction, (state, action) => {
      state.showModal = action.payload
    })
    .addDefaultCase(() => { })
})

export default openModalReducer