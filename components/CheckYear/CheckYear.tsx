import React, { FC } from "react";
import { Row, Container, Col, Button } from "reactstrap";
import { CSSTransition } from "react-transition-group";
import { iCheckYear } from "./CheckYear.interface";

const CheckYear: FC<iCheckYear> = ({ showModal, setCheckYear }) => {
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
              md={6}
              className="offset-md-3 border rounded bg-dark position-relative py-3 py-md-5 px-3"
            >
              <h2 className="text-center">Вам уже есть 18?</h2>
              <hr />
              <p className="text-center">
                Соглашаясь с данной формой, Вы подтверждаете свой возраст!
              </p>
              <Button
                className="d-block mx-auto w-auto px-5"
                onClick={() => setCheckYear(false)}
              >
                Да
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </CSSTransition>
  );
};

export default CheckYear;
