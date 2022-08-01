import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FilterState {
  search: string
  brand: string
  strong: string
  volume: string
}

const initialState: FilterState = {
  search: '',
  brand: 'all',
  strong: 'all',
  volume: '30'
}

export const filterSlice = createSlice({
  name: 'shopFilter',
  initialState,
  reducers: {
    brandFilter: (state: FilterState, action: PayloadAction<string>) => {
      state.brand = action.payload
    },
    searchFilter: (state: FilterState, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    volumeFilter: (state: FilterState, action: PayloadAction<string>) => {
      state.volume = action.payload
    },
    strongFilter: (state: FilterState, action: PayloadAction<string>) => {
      state.strong = action.payload
    },
  },
})

export const { brandFilter, searchFilter, volumeFilter, strongFilter } = filterSlice.actions
export default filterSlice.reducer
