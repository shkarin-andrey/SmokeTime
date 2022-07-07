import { createReducer } from "@reduxjs/toolkit"
import { alertInfoColor, alertInfoHide, alertInfoMessage, alertInfoShow } from './../actions/alertInfo';

interface alertInfoState {
  color: 'success' | 'danger'
  message: string
  isOpen: boolean
}

const initialState: alertInfoState = {
  color: 'success',
  message: '',
  isOpen: false
}

const alertInfo = createReducer(initialState, builder => {
  builder
    .addCase(alertInfoMessage, (state, action) => {
      state.message = action.payload
    })
    .addCase(alertInfoColor, (state, action) => {
      state.color = action.payload
    })
    .addCase(alertInfoShow, (state) => {
      state.isOpen = true
    })
    .addCase(alertInfoHide, (state) => {
      state.isOpen = false
    })
    .addDefaultCase(() => { })
})

export default alertInfo