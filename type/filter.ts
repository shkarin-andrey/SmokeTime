export interface FilterState {
  search: string
  brand: string
  strong: string
  volume: string
}

export enum FilterActionType {
  SEARCH = "SEARCH",
  BRAND = "BRAND",
  STRONG = "STRONG",
  VOLUME = "VOLUME"
}

interface SearchAction {
  type: FilterActionType.SEARCH,
  payload: string
}

interface BrandAction {
  type: FilterActionType.BRAND,
  payload: string
}

interface StrongAction {
  type: FilterActionType.STRONG,
  payload: string
}

interface VolumeAction {
  type: FilterActionType.VOLUME,
  payload: string
}

export type FilterAction =
  SearchAction
  | BrandAction
  | StrongAction
  | VolumeAction