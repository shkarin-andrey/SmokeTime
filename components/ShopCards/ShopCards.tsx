import { FC, useEffect } from "react";
import ShopCard from "../ShopCard/ShopCard";
import { iDataItem } from "../../type/shopData";
import PaginationList from "../Pagination/Pagination";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useAppSelector } from "./../../hooks/useAppSelector";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useAppDispatch } from "./../../hooks/useAppDispatch";
import { countActions } from "../../store/reducers/cartSlice";

const ShopCards: FC = () => {
  const { shop, pages } = useAppSelector((state) => state.shop);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [countLocal, setCountLocal] = useLocalStorage("count", 0);
  const [sumLocal, setSumLocal] = useLocalStorage("sum", 0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(countActions(countLocal));
  }, [countLocal]);

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

    setCart(filterCard);
    updateCount(filterCard);
    updateSum(filterCard);
  };

  const updateCount = (getCart: any) => {
    const updateCartCount = getCart.reduce((p: number, n: any) => {
      return p + n.count;
    }, 0);

    setCountLocal(updateCartCount);
  };

  const updateSum = (getCart: any) => {
    const updateCartSum = getCart.reduce((p: number, n: any) => {
      console.log(n);

      return p + n.sum;
    }, 0);

    setSumLocal(updateCartSum);
  };

  const addItemsCard = (stateCart: any) => {
    filterItemsCard([...cart, stateCart]);
  };

  return (
    <section className="shop">
      <TransitionGroup className="row">
        {shop.length ? (
          shop.map((item: iDataItem) => (
            <CSSTransition key={item.id} timeout={300} classNames="shop-item">
              <ShopCard
                name={item.name}
                price={item.price}
                id={item.id}
                title={item.meta.title}
                addItemsCard={addItemsCard}
              />
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
