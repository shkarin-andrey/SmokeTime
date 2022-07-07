import type { NextApiRequest, NextApiResponse } from "next";
import "isomorphic-fetch";
import Moysklad from "moysklad";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const options = {
    login: process.env.MOYSKLAD_LOGIN,
    password: process.env.MOYSKLAD_PASSWORD,
  };
  const moysklad = Moysklad(options);

  // Список групп товаров
  // const url = "entity/productfolder";

  // Список товаров
  const url = "entity/product";

  moysklad.GET(url).then(({ meta, rows }) => {
    // const data = rows.filter(
    //   (element: any) => element.pathName === "3PRAIDVAPE"
    // );
    // const data = rows.map((element: any) => {
    //   return element.pathName;
    // });

    const data = { rows };
    res.status(200).json({ data, meta, message: "OK" });
  });
}
