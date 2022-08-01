import { createSlice } from '@reduxjs/toolkit'

export interface CheckYearState {
  showModal: boolean
}

const initialState: CheckYearState = {
  showModal: true,
}

export const checkYearSlice = createSlice({
  name: 'checkYear',
  initialState,
  reducers: {
    hideYearModal: (state: CheckYearState) => {
      state.showModal = false;
    },
  },
})

export const { hideYearModal } = checkYearSlice.actions
export default checkYearSlice.reducer
