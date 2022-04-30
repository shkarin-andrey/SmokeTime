import { FC } from "react";
import { Row } from "reactstrap";
import ShopCard from "../ShopCard/ShopCard";
import { iData, iDataItem } from "../../type/shopData";
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
      {pages > 1 ? <PaginationList pages={pages} /> : null}
    </section>
  );
};

export default ShopCards;
