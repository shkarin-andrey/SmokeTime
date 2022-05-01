export interface CartState {
  sum: string
  count: number
  cart: iCart[]
}

export interface iCart {
  name: string;
  price: number;
  sum: number;
  count: number;
  id: string
}