import Link from "next/link";
import { Button, Col, Container, Row } from "reactstrap";
import { filterSelect } from "../../components/Filter/filterSelect";
import Modal from "../../components/Modal/Modal";
import { routes } from "../../routes";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { brandFilter } from "../../store/actions/filter";
const VidgetCart = dynamic(
  () => import("../../components/VidgetCart/VidgetCart"),
  { ssr: false }
);

const Footer = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const linkRouter = (brand: string) => {
    dispatch(brandFilter(brand));
    router.push(`/shop?brand=${brand}&page=1`);
  };
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm={6} lg={3} className="mb-5 text-center text-lg-start">
            <Link href="/">
              <a className="logo">SmokeTime</a>
            </Link>
            <p className="descr">
              Подберите жидкости на свой вкус по привлекательной цене.
            </p>
            <Button>Сделать заказ</Button>
          </Col>
          <Col sm={6} lg={3} className="footer-top mb-5 text-center">
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
          <Col sm={6} lg={3} className="footer-top mb-5 text-center">
            <h4>Бренды</h4>
            <ul>
              {filterSelect.brands.map(
                (item) =>
                  item.value !== "all" && (
                    <li key={item.name}>
                      <div
                        className="footer__link"
                        onClick={() => linkRouter(item.value)}
                      >
                        {item.name}
                      </div>
                    </li>
                  )
              )}
            </ul>
          </Col>
          <Col sm={6} lg={3} className="footer-top mb-5 text-center">
            <h4>Контакты</h4>
            <ul>
              <li>
                <span>Email:</span>{" "}
                <Link href="mailto:info@domen.ru">
                  <a className="gray text-nowrap">info@domen.ru</a>
                </Link>
              </li>
              <li>
                <span>Телефон:</span>{" "}
                <Link href="tel:+79272971619">
                  <a className="gray text-nowrap">+7 (927) 297-16-19</a>
                </Link>
              </li>
              <li>
                <address className="gray">
                  <span>Адрес:</span> г. Самара, ул.Гастелло 49
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
      <Modal />
      <VidgetCart />
    </footer>
  );
};

export default Footer;
