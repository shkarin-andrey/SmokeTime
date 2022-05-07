import { Col, Container, Row } from "reactstrap";
import MainLayout from "../layout";

const Delivery = () => {
  return (
    <MainLayout>
      <h1 className="big-title">Доставка и оплата</h1>
      <Container>
        <Row>
          <Col md={8} className="offset-md-2">
            <p>
              Работаем с вейпШОПами по всей России и СНГ. Мы используем многие
              сервисы для максимально комфортных условий заказа нашим клиентам.
              В ассортименте более 500 различных наименований. Ежедневно
              пополняем склад, поддерживая наличие всех жидкостей. Заказы
              отгружаем сервисом СДЭК по сниженным тарифам. Вся продукция
              оригинал, т.к напрямую закупается с заводов. IT-21 века позволяют
              сделать заказ всего в несколько нажатий.
            </p>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Delivery;
