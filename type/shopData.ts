export interface iData {
  shop: iDataItem[];
  pages: number;
}

export interface iDataItem {
  id: string;
  name: string;
  brand: string;
  strong: number | null | string;
  volume: number;
  price: number;
  taste: string;
  meta: iMeta;
}

interface iMeta {
  title: string;
  img?: string;
}
