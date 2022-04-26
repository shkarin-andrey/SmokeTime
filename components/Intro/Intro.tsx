import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import mainImg from "../../public/img/main-img.png";

const Intro: FC = () => {
  const router = useRouter();
  return (
    <section className="intro">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="big-title">
              Оптовый магазин жидкостей для вейпа SMOKE TIME
            </h1>
            <p className="intro__descr">
              <span>Качественные товары</span> да еще и по{" "}
              <span>низким ценам!</span> Успей <span>заказать</span> пока все не
              разобрали!
            </p>
            <div className="intro__btns">
              <Button onClick={() => router.push("/shop")}>
                Посмотреть каталог
              </Button>
              <Button className="btn-outline">Сделать заказ</Button>
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
