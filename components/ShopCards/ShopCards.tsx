import { FC, useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import ShopCard from "../ShopCard/ShopCard";
import { iDataItem } from "../../pages/api/shop";

const ShopCards: FC = () => {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    fetch(`${process.env.BASE_URL}/api/shop`)
      .then((resp) => resp.json())
      .then((shopData) => setShop(shopData.shop));
  }, []);

  return (
    <section className="shop">
      <Container>
        <div className="shop__cards">
          <Row>
            {shop.map((item: iDataItem) => (
              <ShopCard key={item.id} name={item.name} price={item.price} />
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ShopCards;
