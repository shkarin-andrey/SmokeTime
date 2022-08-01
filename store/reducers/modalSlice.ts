import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface OpenModalState {
  showModal: boolean
}

const initialState: OpenModalState = {
  showModal: false
}

export const openModalSlice = createSlice({
  name: 'openModal',
  initialState,
  reducers: {
    openModalAction: (state: OpenModalState, action: PayloadAction<boolean>) => {
      state.showModal = action.payload
    },
  },
})

export const { openModalAction } = openModalSlice.actions
export default openModalSlice.reducer