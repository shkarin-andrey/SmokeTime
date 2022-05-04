import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import mainImg from "../../public/img/main-img.png";
import { useDispatch } from "react-redux";
import { openModalAction } from "../../store/actions/modal";

const Intro: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <section className="intro">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="big-title text-center text-md-start mt-5 mt-md-0">
              Оптовый магазин жидкостей для вейпа SMOKE TIME
            </h1>
            <p className="intro__descr text-center text-md-start">
              <span>Качественные товары</span> да еще и по{" "}
              <span>низким ценам!</span> Успей <span>заказать</span> пока все не
              разобрали!
            </p>
            <div className="intro__btns justify-content-center justify-content-md-start">
              <Button onClick={() => router.push("/shop")}>
                Посмотреть товары
              </Button>
              <Button
                className="btn-outline"
                onClick={() => dispatch(openModalAction(true))}
              >
                Проконсультироваться
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <Image src={mainImg} alt="SmokeTime" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Intro;
