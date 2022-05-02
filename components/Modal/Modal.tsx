import { FC } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button, Col, Container, Input, Row } from "reactstrap";
import { openModalAction } from "../../store/actions/modal";

const Modal: FC = () => {
  const dispatch = useDispatch();
  const { showModal } = useSelector((state: any) => state.openModalReducer);

  return (
    <div className={`modal ${showModal ? "d-flex" : ""}`}>
      <Container className="d-flex align-items-center justify-content-center">
        <Row className="w-100">
          <Col
            md={8}
            className="offset-md-2 border rounded bg-dark position-relative"
          >
            <div
              className="close position-absolute top-0 end-0 text-dark p-2 fs-4"
              onClick={() => dispatch(openModalAction(false))}
            >
              &#10008;
            </div>
            <Row>
              <Col md={6} className="py-5 px-3">
                <h2>Перезвоните мне</h2>
                <hr />
                <Input
                  name="name"
                  placeholder="Введите ваше имя"
                  className="mb-2 mt-4"
                />
                <Input
                  type="tel"
                  name=""
                  placeholder="Введите ваш номер телефона"
                  className="mb-4"
                />
                <p>
                  Отправляя форму Вы соглашаетесь с политикой
                  конфиденциальности.
                </p>
                <Button className="w-auto px-5">Запросить звонок</Button>
              </Col>
              <Col md={6} className="pe-md-0">
                <img
                  className="w-100 h-100"
                  src="https://ptzgovorit.ru/sites/default/files/styles/700x400/public/original_nodes/grqqw5apj_81.jpg?itok=gM3lRMIi"
                  alt="SmokeTime"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .modal {
          background: rgba(0, 0, 0, 0.8);
        }
        img {
          object-fit: cover;
        }
        .close {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Modal;
