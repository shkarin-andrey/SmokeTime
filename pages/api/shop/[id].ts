// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import shop from "../../../db.json";
import { iDataItem } from "../../../type";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<iDataItem>
) {
  const shopItem = shop.shop.filter((item) => item.id === req.query.id);
  res.status(200).json(shopItem[0]);
}
