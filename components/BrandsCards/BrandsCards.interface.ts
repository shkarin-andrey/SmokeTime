export interface iBrandsCards {
  context: iBrand[];
  btn?: boolean;
}

interface iBrand {
  brand: string;
  minPrice: string;
  link: string;
  img?: string;
}
