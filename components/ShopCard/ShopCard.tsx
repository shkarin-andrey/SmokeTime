import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { Button, Col, Input } from "reactstrap";
import noImg from "../../public/img/no-img.png";

interface iShopCard {
  name: string;
  price: number;
  image?: string | undefined;
  id: string;
}

const ShopCard: FC<iShopCard> = ({ name, price, image, id }) => {
  const [count, setCount] = useState<number>(1);
  const router = useRouter();

  const down = () => {
    if (+count > 1) {
      setCount(+count - 1);
    }
  };

  const stateCart = {
    id,
    name,
    price,
    sum: count * price,
    count,
  };

  const filterItemsCard = (getCart: any) => {
    const filterCard = getCart.reduce((m: any, o: any) => {
      const found = m.find((p: any) => p.id === o.id);
      if (found) {
        found.count += o.count;
        found.sum += o.sum;
      } else {
        m.push(o);
      }
      return m;
    }, []);

    localStorage.setItem("cart", JSON.stringify(filterCard));
  };

  const addItemsCard = () => {
    const getCart = JSON.parse(localStorage.getItem("cart") || "");

    if (getCart.length > 0) {
      localStorage.setItem("cart", JSON.stringify([...getCart, stateCart]));
      filterItemsCard(JSON.parse(localStorage.getItem("cart") || ""));
    } else {
      localStorage.setItem("cart", JSON.stringify([stateCart]));
    }
  };

  const updateCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "");
    const updateCartCount = cart.reduce((p: number, n: any) => {
      return p + n.count;
    }, 0);
    localStorage.setItem("count", JSON.stringify(updateCartCount));
  };

  const updateSum = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "");
    const updateCartSum = cart.reduce((p: number, n: any) => {
      return p + n.sum;
    }, 0);
    localStorage.setItem("sum", JSON.stringify(updateCartSum));
  };

  // const cyr2lat = (str: string) => {
  //   var cyr2latChars = new Array(
  //     ["а", "a"],
  //     ["б", "b"],
  //     ["в", "v"],
  //     ["г", "g"],
  //     ["д", "d"],
  //     ["е", "e"],
  //     ["ё", "yo"],
  //     ["ж", "zh"],
  //     ["з", "z"],
  //     ["и", "i"],
  //     ["й", "y"],
  //     ["к", "k"],
  //     ["л", "l"],
  //     ["м", "m"],
  //     ["н", "n"],
  //     ["о", "o"],
  //     ["п", "p"],
  //     ["р", "r"],
  //     ["с", "s"],
  //     ["т", "t"],
  //     ["у", "u"],
  //     ["ф", "f"],
  //     ["х", "h"],
  //     ["ц", "c"],
  //     ["ч", "ch"],
  //     ["ш", "sh"],
  //     ["щ", "shch"],
  //     ["ъ", ""],
  //     ["ы", "y"],
  //     ["ь", ""],
  //     ["э", "e"],
  //     ["ю", "yu"],
  //     ["я", "ya"],

  //     ["А", "A"],
  //     ["Б", "B"],
  //     ["В", "V"],
  //     ["Г", "G"],
  //     ["Д", "D"],
  //     ["Е", "E"],
  //     ["Ё", "YO"],
  //     ["Ж", "ZH"],
  //     ["З", "Z"],
  //     ["И", "I"],
  //     ["Й", "Y"],
  //     ["К", "K"],
  //     ["Л", "L"],
  //     ["М", "M"],
  //     ["Н", "N"],
  //     ["О", "O"],
  //     ["П", "P"],
  //     ["Р", "R"],
  //     ["С", "S"],
  //     ["Т", "T"],
  //     ["У", "U"],
  //     ["Ф", "F"],
  //     ["Х", "H"],
  //     ["Ц", "C"],
  //     ["Ч", "CH"],
  //     ["Ш", "SH"],
  //     ["Щ", "SHCH"],
  //     ["Ъ", ""],
  //     ["Ы", "Y"],
  //     ["Ь", ""],
  //     ["Э", "E"],
  //     ["Ю", "YU"],
  //     ["Я", "YA"],

  //     ["a", "a"],
  //     ["b", "b"],
  //     ["c", "c"],
  //     ["d", "d"],
  //     ["e", "e"],
  //     ["f", "f"],
  //     ["g", "g"],
  //     ["h", "h"],
  //     ["i", "i"],
  //     ["j", "j"],
  //     ["k", "k"],
  //     ["l", "l"],
  //     ["m", "m"],
  //     ["n", "n"],
  //     ["o", "o"],
  //     ["p", "p"],
  //     ["q", "q"],
  //     ["r", "r"],
  //     ["s", "s"],
  //     ["t", "t"],
  //     ["u", "u"],
  //     ["v", "v"],
  //     ["w", "w"],
  //     ["x", "x"],
  //     ["y", "y"],
  //     ["z", "z"],

  //     ["A", "A"],
  //     ["B", "B"],
  //     ["C", "C"],
  //     ["D", "D"],
  //     ["E", "E"],
  //     ["F", "F"],
  //     ["G", "G"],
  //     ["H", "H"],
  //     ["I", "I"],
  //     ["J", "J"],
  //     ["K", "K"],
  //     ["L", "L"],
  //     ["M", "M"],
  //     ["N", "N"],
  //     ["O", "O"],
  //     ["P", "P"],
  //     ["Q", "Q"],
  //     ["R", "R"],
  //     ["S", "S"],
  //     ["T", "T"],
  //     ["U", "U"],
  //     ["V", "V"],
  //     ["W", "W"],
  //     ["X", "X"],
  //     ["Y", "Y"],
  //     ["Z", "Z"],

  //     [" ", "-"],
  //     ["0", "0"],
  //     ["1", "1"],
  //     ["2", "2"],
  //     ["3", "3"],
  //     ["4", "4"],
  //     ["5", "5"],
  //     ["6", "6"],
  //     ["7", "7"],
  //     ["8", "8"],
  //     ["9", "9"],
  //     ["-", "-"]
  //   );

  //   var newStr = new String();

  //   for (var i = 0; i < str.length; i++) {
  //     const ch = str.charAt(i);
  //     var newCh = "";

  //     for (var j = 0; j < cyr2latChars.length; j++) {
  //       if (ch == cyr2latChars[j][0]) {
  //         newCh = cyr2latChars[j][1];
  //       }
  //     }
  //     newStr += newCh;
  //   }
  //   return newStr
  //     .replace(/[-]{2,}/gim, "-")
  //     .replace(/\n/gim, "")
  //     .toLowerCase();
  // };

  return (
    <Col sm={6} xl={4}>
      <div className="card">
        <div className="card__top" onClick={() => router.push("/shop/" + id)}>
          <Image src={image ? image : noImg} alt={name} />
          <h3>{name}</h3>
        </div>
        <div className="card__bottom">
          <div className="card__bottom__order">
            <div className="card__bottom__order-input">
              <div className="down" onClick={down}>
                &mdash;
              </div>
              <Input
                type="number"
                bsSize={"sm"}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
              />
              <div className="up" onClick={() => setCount(+count + 1)}>
                &#10010;
              </div>
            </div>
            <Button
              onClick={async () => {
                await addItemsCard();
                updateCount();
                updateSum();
              }}
            >
              Заказать
            </Button>
          </div>
          <div className="card__bottom__price">
            <div className="card__bottom__price-prev">
              {price * 1.2},00 руб.
            </div>
            <div className="card__bottom__price-new">
              {price}
              <span>,00 руб.</span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ShopCard;
