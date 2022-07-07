// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import shop from "../data/db.json";
import { iDataItem } from "../../../type/shopData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<iDataItem>
) {
  const shopItem = shop.shop.filter((item) => item.meta.title === req.query.title);
  res.status(200).json(shopItem[0]);
}
