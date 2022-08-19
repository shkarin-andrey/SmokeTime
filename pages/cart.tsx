import { Container } from "reactstrap";
import MainLayout from "../layout";

import dynamic from "next/dynamic";

const CartPage = dynamic(() => import("../components/CartPage/CartPage"), {
  ssr: false,
});

const Cart = () => {
  const title = `Корзина товаров с жидкостями для вейпа оптового интернет-магазина`;
  const description =
    "Принимаем заказы жидкостей для эектронных сигарет по брендам SkyVape, Toyz, VoodoLab, Hotspot, PraidVape и др. Зарабатывайте с нами!";

  return (
    <MainLayout title={title} description={description}>
      <h1 className="big-title">Корзина</h1>
      <Container>
        <CartPage />
      </Container>
    </MainLayout>
  );
};

export default Cart;
