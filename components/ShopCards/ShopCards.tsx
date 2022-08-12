import { FC, useEffect } from "react";
import ShopCard from "../ShopCard/ShopCard";
import { iDataItem } from "../../type/shopData";
import PaginationList from "../Pagination/Pagination";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useAppSelector } from "./../../hooks/useAppSelector";
import useLocalStorage from "../../hooks/useLocalStorage";
import { iCart } from "../../type/cart";
import { countActions } from "../../store/reducers/cartSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Row } from "reactstrap";

const ShopCards: FC = () => {
  const { shop, pages } = useAppSelector((state) => state.shop);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [countLocal, setCountLocal] = useLocalStorage("count", 0);
  const [sumLocal, setSumLocal] = useLocalStorage("sum", 0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(countActions(countLocal));
  }, [countLocal]);

  const filterItemsCard = (getCart: iCart[]) => {
    const filterCard = getCart.reduce((m: iCart[], o: iCart) => {
      const found = m.find((p: iCart) => p.id === o.id);

      if (found) {
        found.count += o.count;
        found.sum += o.sum;
      } else {
        m.push(o);
      }
      return m;
    }, []);

    setCart(filterCard);
    updateCount(filterCard);
    updateSum(filterCard);
  };

  const updateCount = (getCart: iCart[]) => {
    const updateCartCount = getCart.reduce((p: number, n: iCart) => {
      return p + n.count;
    }, 0);

    setCountLocal(updateCartCount);
  };

  const updateSum = (getCart: iCart[]) => {
    const updateCartSum = getCart.reduce((p: number, n: iCart) => {
      return p + n.sum;
    }, 0);

    setSumLocal(updateCartSum);
  };

  const addItemsCard = (stateCart: iCart) => {
    filterItemsCard([...cart, stateCart]);
  };

  return (
    <section className="shop">
      <Row>
        {shop ? (
          shop.map((item: iDataItem) => (
            <ShopCard
              key={item.id}
              name={item.name}
              price={item.price}
              id={item.id}
              title={item.meta.title}
              addItemsCard={addItemsCard}
              image={item.meta.img}
            />
          ))
        ) : (
          <p className="text-center">По заданному фильтру товаров не найдено</p>
        )}
      </Row>
      {pages > 1 ? <PaginationList pages={pages} /> : null}
    </section>
  );
};

export default ShopCards;
