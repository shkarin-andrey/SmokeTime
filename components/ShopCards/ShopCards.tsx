import { FC } from "react";
import { Row } from "reactstrap";
import ShopCard from "../ShopCard/ShopCard";
import { iData, iDataItem } from "../../type";
import PaginationList from "../Pagination/Pagination";

const ShopCards: FC<iData> = ({ shop, pages }) => {
  return (
    <section className="shop">
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
      <PaginationList pages={pages} />
    </section>
  );
};

export default ShopCards;
