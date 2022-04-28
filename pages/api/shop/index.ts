// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import shop from "../../../db.json";

export interface iData {
  shop: iDataItem[];
  pages: number
}

export interface iDataItem {
  id: string;
  code: string;
  name: string;
  price: string;
  EAN13: string;
  weight: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<iData>
) {
  const limit = req.query.limit
  const page = req.query.page
  const pages = Math.ceil(shop.shop.length / +limit)
  const prev = (+page - 1) * +limit
  const next = (prev || 0) + +limit

  const result = shop.shop.slice(prev, next);
  res.status(200).json({ shop: result, pages });
}
