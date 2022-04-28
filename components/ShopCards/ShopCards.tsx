import { FC } from "react";
import { Container, Row } from "reactstrap";
import ShopCard from "../ShopCard/ShopCard";
import { iDataItem } from "../../pages/api/shop";
import PaginationList from "../Pagination/Pagination";
import { iData } from "../../pages/api/shop";

const ShopCards: FC<iData> = ({ shop, pages }) => {
  return (
    <section className="shop">
      <Container>
        <div className="shop__cards">
          <Row>
            {shop.map((item: iDataItem) => (
              <ShopCard
                key={item.id}
                name={item.name}
                price={item.price}
                id={item.id}
              />
            ))}
          </Row>
        </div>
        <PaginationList pages={pages} />
      </Container>
    </section>
  );
};

export default ShopCards;
