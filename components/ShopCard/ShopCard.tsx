import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FC, useState } from "react";
import { Button, Col, Input } from "reactstrap";
import noImg from "../../public/img/no-img.png";
import { iShopCard } from "./ShopCard.interface";

const ShopCard: FC<iShopCard> = ({
  name,
  price,
  image,
  id,
  title,
  addItemsCard,
}) => {
  const [count, setCount] = useState<number>(1);
  const router = useRouter();

  const down = () => {
    if (+count > 1) {
      setCount((count) => count - 1);
    }
  };

  const up = () => setCount((count) => count + 1);

  const stateCart = {
    id,
    name,
    price,
    sum: count * price,
    count,
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  return (
    <Col sm={6} xl={4}>
      <div className="card">
        <div
          className="card__top position-relative"
          onClick={() => router.push("/shop/" + title)}
        >
          <Image
            src={image || noImg}
            alt={name}
            layout={"fill"}
            placeholder={"blur"}
            blurDataURL={image}
          />
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
                onChange={changeHandler}
              />
              <div className="up" onClick={up}>
                &#10010;
              </div>
            </div>
            <Button onClick={() => addItemsCard(stateCart)}>В корзину</Button>
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
