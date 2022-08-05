import { iCart } from "../../type/cart";

export interface iCartTable {
  cart: iCart[];
  updateItemCart: (count: number, sum: number) => void;
  deleteItemCart: (id: string) => void;
}
