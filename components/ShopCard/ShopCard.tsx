import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { Button, Col, Input } from "reactstrap";
import noImg from "../../public/img/no-img.png";
import { useDispatch, useSelector } from "react-redux";
import { addCart, countCart } from "../../store/actions/cart";

interface iShopCard {
  name: string;
  price: number;
  image?: string | undefined;
  id: string;
}

const ShopCard: FC<iShopCard> = ({ name, price, image, id }) => {
  const [count, setCount] = useState<number>(1);
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.shopCart);

  const down = () => {
    if (+count > 1) {
      setCount(+count - 1);
    }
  };

  const stateCart = {
    id,
    name,
    price,
    sum: +count * price,
    count,
  };

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
              onClick={() => {
                dispatch(addCart(stateCart));
                dispatch(countCart(state.count + count));
                console.log(state.count + +count);
                console.log(state.count);
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
