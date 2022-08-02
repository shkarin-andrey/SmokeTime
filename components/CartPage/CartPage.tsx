import { FC, useState } from "react";
import { Col, Row } from "reactstrap";
import CartSum from "../CartSum/CartSum";
import CartTable from "../CartTable/CartTable";
import OrderBuy from "../Forms/OrderBuy";
import useLocalStorage from "./../../hooks/useLocalStorage";
import { useAppDispatch } from "./../../hooks/useAppDispatch";
import { countActions } from "../../store/reducers/cartSlice";
import { iCart } from "../../type/cart";

const CartPage: FC = () => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [count, setCount] = useLocalStorage("count", 0);
  const [sum, setSum] = useLocalStorage("sum", 0);

  const dispatch = useAppDispatch();

  const deleteItemCart = (id: string) => {
    const filterCart = cart.filter((x: iCart) => x.id !== id);
    setCart(filterCart);
  };

  const updateItemCart = (count: number, sum: number) => {
    const updateCartCount = cart.reduce((p: number, n: iCart) => {
      return p + n.count;
    }, -count);
    setCount(updateCartCount);
    dispatch(countActions(updateCartCount));

    const updateCartSum = cart.reduce((p: number, n: iCart) => {
      return p + n.sum;
    }, -sum);
    setSum(updateCartSum);
  };

  return (
    <>
      <Row>
        <Col>
          <CartTable
            deleteItemCart={deleteItemCart}
            updateItemCart={updateItemCart}
            cart={cart}
          />
        </Col>
      </Row>
      {cart.length > 0 && (
        <Row className="mt-5 mb-5">
          <Col md={7} lg={6} className="order-2 order-md-1">
            <OrderBuy />
          </Col>
          <Col
            md={3}
            className="offset-lg-3 offset-md-2 text-center text-md-start order-1 order-md-2 mb-5 mb-md-0"
          >
            <CartSum count={count} sum={sum} />
          </Col>
        </Row>
      )}
    </>
  );
};

export default CartPage;
