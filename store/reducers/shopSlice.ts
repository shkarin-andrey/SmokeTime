import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { iData, iDataItem } from '../../type/shopData'

const initialState: iData = {
  shop: [],
  pages: 1
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    shopActions: (state: iData, action: PayloadAction<iDataItem[]>) => {
      state.shop = [...action.payload]
    },
    pagesActions: (state: iData, action: PayloadAction<number>) => {
      state.pages = action.payload
    }
  },
})

export const { shopActions, pagesActions } = shopSlice.actions
export default shopSlice.reducer
