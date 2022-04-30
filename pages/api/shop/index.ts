// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import shop from "../data/db.json";
import { iData } from "../../../type/shopData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<iData>
) {
  const { limit, page, brand, strong, volume } = req.query
  const prev = (+page - 1) * +limit
  const next = (prev || 0) + +limit

  let pages
  let result

  if (brand && brand !== 'all') {
    const filterBrand = shop.shop.filter(item => item.brand === brand)
    pages = Math.ceil(filterBrand.length / +limit)
    result = filterBrand.slice(prev, next);
  } else if (strong && strong !== 'all') {
    const filterStrong = shop.shop.filter(item => item.strong === +strong)
    pages = Math.ceil(filterStrong.length / +limit)
    result = filterStrong.slice(prev, next);
  } else {
    pages = Math.ceil(shop.shop.length / +limit)
    result = shop.shop.slice(prev, next);
  }

  res.status(200).json({ shop: result, pages });
}
