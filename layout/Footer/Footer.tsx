import Link from "next/link";
import { Button, Col, Container, Row } from "reactstrap";
import { routes } from "../../routes";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3}>
            <Link href="/">
              <a className="logo">SmokeTime</a>
            </Link>
            <p className="descr">
              Подберите жидкости на свой вкус по привлекательной цене.
            </p>
            <Button>Сделать заказ</Button>
          </Col>
          <Col md={3} className="footer-top">
            <h4>Меню</h4>
            <ul>
              {routes.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={3} className="footer-top">
            <h4>Бренды</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>Haski</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Haski</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Haski</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Haski</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="footer-top">
            <h4>Контакты</h4>
            <ul>
              <li>
                <span>Email:</span>{" "}
                <Link href="mailto:info@domen.ru">
                  <a className="gray">info@domen.ru</a>
                </Link>
              </li>
              <li>
                <span>Телефон:</span>{" "}
                <Link href="tel:+79999999999">
                  <a className="gray">+7 (999) 999-99-99</a>
                </Link>
              </li>
              <li>
                <address className="gray">
                  <span>Адрес:</span> г. Самара, Финская улица, 96
                </address>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="footer-bottom">
            <span>©2022 SmokeTime</span>
            <Link href="/policy">
              <a>Политика конфиденциальности</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
