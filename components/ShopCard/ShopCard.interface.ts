import { iCart } from "../../type/cart";

export interface iShopCard {
  name: string;
  price: number;
  image?: string;
  id: string;
  title: string;
  addItemsCard: (cart: iCart) => void;
}
