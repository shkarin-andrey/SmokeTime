import { Col, Container, Row } from "reactstrap";
import MainLayout from "../layout";

const Delivery = () => {
  return (
    <MainLayout>
      <h1 className="big-title">Доставка и оплата</h1>
      <Container>
        <Row>
          <Col md={8} className="offset-md-2">
            <p className="text-indent">
              Отправляем заказы по России и странам СНГ: Транспортной компанией
              СДЭК, межгород - автобусом, по городу возможен самовывоз, а также
              такси. Доставка готового заказа до ТК в этот же день. Стоимость
              грузоперевозок СДЭК рассчитывается по сниженным тарифам, т.к
              заключен договор с нашей компанией. Для заказов от 50 тысяч
              рублей, доставка осуществляется за наш счет!
            </p>
            <p className="text-indent">
              Оплата заказа происходит после получения трек номера для
              отслеживания заказа.
            </p>
            <p className="text-indent">
              Оплатить можно любым удобным для вас способом:
            </p>
            <p className="text-indent">
              Наличный расчет - Перевод с карты на карту (Сбер, Тинькофф, СБП).
            </p>
            <p className="text-indent">
              Безналичный расчет – Р/С +6% к стоимости заказа.
            </p>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Delivery;
