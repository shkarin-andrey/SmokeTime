import { Col, Container, Row, Table } from "reactstrap";
import MainLayout from "../layout";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state: any) => state.shopCart);
  return (
    <MainLayout>
      <h1 className="big-title">Корзина</h1>
      <Container>
        <Row>
          <Col>
            {cart.length > 0 ? (
              <Table>
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Название</th>
                    <th>Количество, шт.</th>
                    <th>Цена за шт.</th>
                    <th>Сумма, руб</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item: any, i: number) => (
                    <tr key={item.id} id={item.id}>
                      <th>{i + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.count}</td>
                      <td>{item.price}</td>
                      <td>{item.sum}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p className="text-center">Корзина пуста</p>
            )}
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Cart;
