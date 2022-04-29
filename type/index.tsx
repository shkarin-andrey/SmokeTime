export interface iData {
  shop: iDataItem[];
  pages: number;
}

export interface iDataItem {
  id: string;
  name: string;
  brand: string;
  strong: number;
  volume: number;
  price: number;
}
