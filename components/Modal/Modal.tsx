import { FC } from "react";
import { Button, Col, Container, Row } from "reactstrap";

const Modal: FC = () => {
  return (
    <div className="modal">
      <Container>
        <Row>
          <Col md={8} className="offset-md-2">
            Hello
            <hr />
            <Button>Отправить</Button>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .modal {
          display: flex;
          background: rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </div>
  );
};

export default Modal;
