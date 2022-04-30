import { createReducer } from "@reduxjs/toolkit"
import { FilterState } from "../../type/filter"
import { brandFilter, searchFilter, volumeFilter, strongFilter } from "../actions/filter"

const initialState: FilterState = {
  search: '',
  brand: 'all',
  strong: 'all',
  volume: '30'
}

const shopFilter = createReducer(initialState, builder => {
  builder
    .addCase(brandFilter, (state, action) => {
      state.brand = action.payload
    })
    .addCase(searchFilter, (state, action) => {
      state.search = action.payload
    })
    .addCase(volumeFilter, (state, action) => {
      state.volume = action.payload
    })
    .addCase(strongFilter, (state, action) => {
      state.strong = action.payload
    })
    .addDefaultCase(() => { })
})

export default shopFilter