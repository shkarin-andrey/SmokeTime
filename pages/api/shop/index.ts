// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { shop } from "../data/db";
import { iData } from "../../../type/shopData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<iData>
) {
  const { limit, page, brand, strong, volume, search }: any = req.query;

  const prev = (+page - 1) * +limit;
  const next = (prev || 0) + +limit;

  const filteredShop = await shop.filter((item) => {
    const filterBrand = brand ? item.brand === brand : true;
    const filterStrong = strong ? item.strong === +strong : true;
    const filterSearch = search
      ? item.name.toLowerCase().search(search.toLowerCase()) !== -1
      : true;

    const filterVolume = volume ? item.volume === +volume : true;

    return filterBrand && filterStrong && filterSearch && filterVolume
      ? item
      : null;
  });

  const getResult = () => {
    if (limit) {
      return filteredShop.slice(prev, next);
    }

    return filteredShop;
  };

  const getPages = () => {
    if (limit) {
      return Math.ceil(filteredShop.length / +limit);
    }

    return 1;
  };

  const result = await getResult();
  const pages = await getPages();

  res.status(200).json({ shop: result, pages });
}
