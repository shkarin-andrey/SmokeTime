import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { Button, Col, Input } from "reactstrap";
import img from "../../public/img/haski.png";

interface iShopCard {
  name: string;
  price: string;
  image?: string | undefined;
  id: string;
}

const ShopCard: FC<iShopCard> = ({ name, price, image, id }) => {
  const [count, setCount] = useState<number | string>("1");

  return (
    <Col md={3}>
      <div className="card">
        <Link href={`/shop/${id}`}>
          <a>
            <div className="card__top">
              <Image src={image ? image : img} alt={name} />
              <h3>{name}</h3>
            </div>
          </a>
        </Link>
        <div className="card__bottom">
          <div className="card__bottom__order">
            <div className="card__bottom__order-input">
              <div className="down" onClick={() => setCount(+count - 1)}>
                &mdash;
              </div>
              <Input
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              <div className="up" onClick={() => setCount(+count + 1)}>
                &#10010;
              </div>
            </div>
            <Button>Заказать</Button>
          </div>
          <div className="card__bottom__price">
            <div className="card__bottom__price-prev">
              {+price.split(",")[0] * 1.2},00 руб.
            </div>
            <div className="card__bottom__price-new">
              {price} <span>руб.</span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ShopCard;
