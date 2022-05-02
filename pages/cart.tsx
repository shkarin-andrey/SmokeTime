import { Col, Container, Row, Table } from "reactstrap";
import MainLayout from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, sumCart, countCart } from "../store/actions/cart";

const Cart = () => {
  const { cart, count, sum } = useSelector((state: any) => state.shopCart);
  const dispatch = useDispatch();

  const deleteItemCart = (id: string) => {
    const filterCart = cart.filter((x: any) => x.id !== id);
    dispatch(deleteCart(filterCart));
  };

  const updateItemCart = (count: number, sum: number) => {
    const updateCartCount = cart.reduce((p: number, n: any) => {
      return p + n.count;
    }, -count);
    dispatch(countCart(updateCartCount));
    const updateCartSum = cart.reduce((p: number, n: any) => {
      return p + n.sum;
    }, -sum);
    dispatch(sumCart(updateCartSum));
  };

  return (
    <MainLayout>
      <h1 className="big-title">Корзина</h1>
      <Container>
        <Row>
          <Col>
            {cart.length > 0 ? (
              <Table bordered>
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Название</th>
                    <th>Количество, шт.</th>
                    <th>Цена за шт.</th>
                    <th>Сумма, руб</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item: any, i: number) => (
                    <tr key={item.id} id={item.id}>
                      <th>{i + 1}</th>
                      <td>{item.name}</td>
                      <td>
                        {new Intl.NumberFormat("ru-RU").format(item.count)}
                      </td>
                      <td>{item.price}</td>
                      <td>{new Intl.NumberFormat("ru-RU").format(item.sum)}</td>
                      <td
                        onClick={() => {
                          deleteItemCart(item.id);
                          updateItemCart(item.count, item.sum);
                        }}
                      >
                        &#10008;
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p className="text-center">Корзина пуста</p>
            )}
          </Col>
        </Row>
        {cart.length > 0 ? (
          <Row className="justify-content-end mb-5">
            <Col md={3}>
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
