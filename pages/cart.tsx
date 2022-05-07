import { Container } from "reactstrap";
import MainLayout from "../layout";

import dynamic from "next/dynamic";

const CartPage = dynamic(() => import("../components/CartPage/CartPage"), {
  ssr: false,
});

const Cart = () => {
  return (
    <MainLayout>
      <h1 className="big-title">Корзина</h1>
      <Container>
        <CartPage />
      </Container>
    </MainLayout>
  );
};

export default Cart;
