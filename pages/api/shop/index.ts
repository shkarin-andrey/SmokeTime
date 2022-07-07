// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import shop from "../data/db.json";
import { iData } from "../../../type/shopData";
import fs from 'fs'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<iData>
) {
  const { limit, page, brand, strong, volume, search }: any = req.query
  const prev = (+page - 1) * +limit
  const next = (prev || 0) + +limit

  const filteredShop = await shop.shop.filter(item => {
    const filterBrand = brand ? item.brand === brand : true
    const filterStrong = strong ? item.strong === +strong : true
    const filterSearch = search ? item.name.toLowerCase().search(search.toLowerCase()) !== -1 : true

    const filterVolume = volume ? item.volume === +volume : true

    return filterBrand && filterStrong && filterSearch && filterVolume ? item : null
  })

  const result = await filteredShop.slice(prev, next)
  const pages = await Math.ceil(filteredShop.length / +limit)

  // function generate_url(str: string) {
  //   var url = str.replace(/[\s]+/gi, "-");
  //   url = translit(url);
  //   url = url.replace(/[^0-9a-z_\-]+/gi, "").toLowerCase();
  //   return url;
  // }

  // function translit(str: string) {
  //   var ru =
  //     "А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я".split(
  //       "-"
  //     );
  //   var en =
  //     "A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya".split(
  //       "-"
  //     );
  //   var res = "";
  //   for (var i = 0, l = str.length; i < l; i++) {
  //     var s = str.charAt(i),
  //       n = ru.indexOf(s);
  //     if (n >= 0) {
  //       res += en[n];
  //     } else {
  //       res += s;
  //     }
  //   }
  //   return res;
  // }

  // -----------------------------------
  // Create mock.json DB

  // const test = shop.shop.map(item => {
  //   return {
  //     ...item,
  //     meta: {
  //       title: generate_url(`Жидкость для вейпа ${item.name}`)
  //     }
  //   }
  // })

  // fs.writeFile('mock.json', JSON.stringify({ shop: test }), (err) => {
  //   if (err) throw err;
  //   console.log('Data has been replaced!');
  // });

  res.status(200).json({ shop: result, pages });
}
