import { FC } from "react";
import ShopCard from "../ShopCard/ShopCard";
import { iData, iDataItem } from "../../type/shopData";
import PaginationList from "../Pagination/Pagination";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ShopCards: FC<iData> = ({ shop, pages }) => {
  return (
    <section className="shop">
      <TransitionGroup className="row">
        {shop.length ? (
          shop.map((item: iDataItem) => (
            <CSSTransition key={item.id} timeout={500} classNames="shop-item">
              <ShopCard name={item.name} price={item.price} id={item.id} />
            </CSSTransition>
          ))
        ) : (
          <p className="text-center">По заданному фильтру товаров не найдено</p>
        )}
      </TransitionGroup>
      {pages > 1 ? <PaginationList pages={pages} /> : null}
    </section>
  );
};

export default ShopCards;
