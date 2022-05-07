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
