import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import img from "../../public/img/main-img.png";

const AboutCompany = () => {
  return (
    <section className="about_company">
      <Container>
        <Row className="mt-5 align-items-center">
          <Col md={6}>
            <p>
              <span>Smoke time</span> – это крупная оптовая компания на рынке
              вейпинга. Мы являемся дистрибьюторами самых популярных брендов.
              Работаем с вейпШОПами по всей России и СНГ. Мы используем многие
              сервисы для максимально комфортных условий заказа нашим клиентам.
            </p>
            <p>
              В ассортименте более 500 различных наименований. Ежедневно
              пополняем склад, поддерживая наличие всех жидкостей. Заказы
              отгружаем сервисом СДЭК по сниженным тарифам. Вся продукция
              оригинал, т.к напрямую закупается с заводов. IT-21 века позволяют
              сделать заказ всего в несколько нажатий.
            </p>
          </Col>
          <Col md={6}>
            <Image src={img} alt="О компании SMOKE TIME" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCompany;
