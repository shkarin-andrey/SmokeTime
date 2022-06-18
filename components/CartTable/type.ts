export interface iCartTable {
  cart: string[];
  updateItemCart: (count: number, sum: number) => void;
  deleteItemCart: (id: string) => void;
}