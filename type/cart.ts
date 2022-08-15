export type CartState = {
  sum: number;
  count: number;
  cart: iCart[];
};

export type iCart = {
  name: string;
  price: number;
  sum: number;
  count: number;
  id: string;
};
