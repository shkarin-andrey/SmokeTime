export type iData = {
  shop: iDataItem[];
  pages: number;
};

export type iDataItem = {
  id: string;
  name: string;
  brand: string;
  strong: number | null | string;
  volume: number;
  price: number;
  taste: string;
  meta: iMeta;
};

type iMeta = {
  title: string;
  img?: string;
};
