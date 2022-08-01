import { FC } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
import { CSSTransition } from "react-transition-group";
import support from "../../public/img/support.jpg";
import { openModalAction } from "../../store/reducers/modalSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const Modal: FC = () => {
  const dispatch = useAppDispatch();
  const { showModal } = useAppSelector((state) => state.openModal);

  return (
    <CSSTransition
      in={showModal}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div className={`modal d-flex`}>
        <Container className="d-flex align-items-center justify-content-center">
          <Row className="w-100">
            <Col
              md={8}
              className="offset-md-2 border rounded bg-dark position-relative"
            >
              <div
                className="close position-absolute top-0 end-0 p-2 fs-4"
                onClick={() => dispatch(openModalAction(false))}
              >
                &#10008;
              </div>
              <Row>
                <Col
                  md={6}
                  className="py-3 py-md-5 px-3 text-center text-md-start"
                >
                  <h2>Обратная связь</h2>
                  <hr />
                  <Input
                    name="name"
                    placeholder="Введите ваше имя"
                    className="mb-2 mt-4 text-center text-md-start"
                  />
                  <Input
                    type="tel"
                    name=""
                    placeholder="Введите ваш номер телефона"
                    className="mb-4 text-center text-md-start"
                  />
                  <p>
                    Отправляя форму Вы соглашаетесь с политикой
                    конфиденциальности.
                  </p>
                  <Button className="w-auto px-5">Запросить звонок</Button>
                </Col>
                <Col md={6} className="pe-md-0 px-0 px-md-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-100 h-100"
                    src={support.src}
                    alt="SmokeTime"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </CSSTransition>
  );
};

export default Modal;
