import { Button, Col, Container, Row } from "reactstrap";
import MainLayout from "../layout";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import CartTable from "../components/CartTable/CartTable";
import OrderBuy from "../components/OrderBuy/OrderBuy";

const Cart = () => {
  const { cart, count, sum } = useSelector((state: any) => state.shopCart);
  const router = useRouter();

  return (
    <MainLayout>
      <h1 className="big-title">Корзина</h1>
      <Container>
        <Row>
          <Col>
            {cart.length > 0 ? (
              <CartTable />
            ) : (
              <div className="mb-5 mt-5">
                <p className="text-center">Пока в корзине ничего нет.</p>
                <Button
                  className="d-block mx-auto"
                  onClick={() => router.push("/shop")}
                >
                  В магазин
                </Button>
              </div>
            )}
          </Col>
        </Row>
        {cart.length > 0 ? (
          <Row className="mt-5 mb-5">
            <Col md={6}>
              <OrderBuy />
            </Col>
            <Col md={3} className="offset-md-3">
              <h2 className="title text-start">Итого:</h2>
              <div className="cart__count">
                Количество:{" "}
                <span>{new Intl.NumberFormat("ru-RU").format(count)}</span> шт.
              </div>
              <div className="cart__sum">
                Сумма: <span>{new Intl.NumberFormat("ru-RU").format(sum)}</span>{" "}
                руб.
              </div>
            </Col>
          </Row>
        ) : (
          ""
        )}
      </Container>
    </MainLayout>
  );
};

export default Cart;
