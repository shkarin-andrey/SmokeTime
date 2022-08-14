import Link from "next/link";
import { Button, Col, Container, Row } from "reactstrap";
import { filterSelect } from "../../components/Filter/filterSelect";
import { routes } from "../../routes";

import { useRouter } from "next/router";
// import CheckYear from "../../components/CheckYear/CheckYear";
import useLocalStorage from "../../hooks/useLocalStorage";
import VidgetCart from "../../components/VidgetCart/VidgetCart";
import { brandFilter } from "../../store/reducers/filterSlice";
import { openModalAction } from "../../store/reducers/modalSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import CallBackForm from "../../components/Forms/CallBackForm";
import dynamic from "next/dynamic";

const CheckYear = dynamic(
  () => import("../../components/CheckYear/CheckYear"),
  {
    ssr: false,
  }
);

const Footer = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { showModal } = useAppSelector((state) => state.openModal);

  const [checkYear, setCheckYear] = useLocalStorage("checkYear", true);

  const linkRouter = (brand: string) => {
    dispatch(brandFilter(brand));
    router.push(`/shop?brand=${brand}&page=1`);
  };

  return (
    <>
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
              <Button onClick={() => dispatch(openModalAction(!showModal))}>
                Обратная связь
              </Button>
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
                  <Link href="mailto:smoke-time-opt@mail.ru">
                    <a className="gray text-nowrap">smoke-time-opt@mail.ru</a>
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
      </footer>
      <CallBackForm />
      <VidgetCart />
      {checkYear && (
        <CheckYear showModal={checkYear} setCheckYear={setCheckYear} />
      )}
    </>
  );
};

export default Footer;
