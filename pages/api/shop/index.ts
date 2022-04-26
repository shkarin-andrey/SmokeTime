// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import shop from "../../../db.json";

export interface iData {
  shop: iDataItem[];
}

export interface iDataItem {
  id: string;
  code: string;
  name: string;
  price: string;
  EAN13: string;
  weight: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<iData>
) {
  res.status(200).json({ shop });
}
