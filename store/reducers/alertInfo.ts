import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AlertInfoState {
  color: 'success' | 'danger'
  message: string
  isOpen: boolean
}

const initialState: AlertInfoState = {
  color: 'success',
  message: '',
  isOpen: false
}

export const alertInfoSlice = createSlice({
  name: 'alertInfo',
  initialState,
  reducers: {
    alertInfoMessage: (state: AlertInfoState, action: PayloadAction<string>) => {
      state.message = action.payload
    },
    alertInfoColor: (state: AlertInfoState, action: PayloadAction<"success" | "danger">) => {
      state.color = action.payload
    },
    alertInfoShow: (state: AlertInfoState) => {
      state.isOpen = true
    },
    alertInfoHide: (state: AlertInfoState) => {
      state.isOpen = false
    },
  },
})

export const { alertInfoMessage, alertInfoColor, alertInfoShow, alertInfoHide } = alertInfoSlice.actions
export default alertInfoSlice.reducer
