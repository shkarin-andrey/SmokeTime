import { Col, Container, Row } from "reactstrap";
import Delivery from "../../public/icons/delivery";
import Original from "../../public/icons/original";
import Price from "../../public/icons/price";

const Why = () => {
  return (
    <section className="why">
      <Container>
        <h2 className="title">Почему мы?</h2>
        <Row className="mt-5">
          <Col md={4} className="why__card">
            <Price />
            <h3>Самые низкие цены</h3>
            <p>
              Если Вы нашли цену ниже нашей, то сообщите нам и мы договоримся.
            </p>
          </Col>
          <Col md={4} className="why__card">
            <Original />
            <h3>Оригинальная продукция</h3>
            <p>
              Мы являемся дистрибютерами таких брендов как: Hasky, VOODOO и
              другие.
            </p>
          </Col>
          <Col md={4} className="why__card">
            <Delivery />
            <h3>Быстрая доставка</h3>
            <p>Отправка в любой город через СДЭК</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Why;
