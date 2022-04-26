import Image from "next/image";
import { FC } from "react";
import { Button, Col } from "reactstrap";
import img from "../../public/img/haski.png";

interface iShopCard {
  name: string;
  price: string;
  image?: string | undefined;
}

const ShopCard: FC<iShopCard> = ({ name, price, image }) => {
  return (
    <Col md={3}>
      <div className="card">
        <div className="card__top">
          <Image src={image ? image : img} alt={name} />
          <h3>{name}</h3>
        </div>
        <div className="card__bottom">
          <Button>Заказать</Button>
          <div className="card__bottom__price">
            <div className="card__bottom__price-prev">
              {+price.split(",")[0] * 1.2},00 руб.
            </div>
            <div className="card__bottom__price-new">{price} руб.</div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ShopCard;
