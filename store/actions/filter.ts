import { createAction } from "@reduxjs/toolkit";

export const searchFilter = createAction<string>('SEARCH')
export const brandFilter = createAction<string>('BRAND')
export const strongFilter = createAction<string>('STRONG')
export const volumeFilter = createAction<string>('VOLUME')