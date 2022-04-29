import Image from "next/image";
import Link from "next/link";
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
  const [count, setCount] = useState<number | string>(1);
  const router = useRouter();

  return (
    <Col md={4}>
      <div className="card">
        <div className="card__top" onClick={() => router.push("/shop/" + id)}>
          <Image src={image ? image : noImg} alt={name} />
          <h3>{name}</h3>
        </div>
        <div className="card__bottom">
          <div className="card__bottom__order">
            <div className="card__bottom__order-input">
              <div className="down" onClick={() => setCount(+count - 1)}>
                &mdash;
              </div>
              <Input
                type="number"
                bsSize={"sm"}
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
