import { FC, useState } from "react";
import { Col, Row } from "reactstrap";
import CartSum from "../CartSum/CartSum";
import CartTable from "../CartTable/CartTable";
import OrderBuy from "../OrderBuy/OrderBuy";

const CartPage: FC = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "")
  );

  const deleteItemCart = (id: string) => {
    const filterCart = cart.filter((x: any) => x.id !== id);
    localStorage.setItem("cart", JSON.stringify(filterCart));
    setCart(JSON.parse(localStorage.getItem("cart") || ""));
  };

  const updateItemCart = (count: number, sum: number) => {
    const updateCartCount = cart.reduce((p: number, n: any) => {
      return p + n.count;
    }, -count);
    localStorage.setItem("count", JSON.stringify(updateCartCount));

    const updateCartSum = cart.reduce((p: number, n: any) => {
      return p + n.sum;
    }, -sum);
    localStorage.setItem("sum", JSON.stringify(updateCartSum));
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
      {cart.length > 0 ? (
        <Row className="mt-5 mb-5">
          <Col md={7} lg={6} className="order-2 order-md-1">
            <OrderBuy />
          </Col>
          <Col
            md={3}
            className="offset-lg-3 offset-md-2 text-center text-md-start order-1 order-md-2 mb-5 mb-md-0"
          >
            <CartSum />
          </Col>
        </Row>
      ) : (
        ""
      )}
    </>
  );
};

export default CartPage;
