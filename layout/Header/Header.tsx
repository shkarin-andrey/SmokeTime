import { useState } from "react";
import Link from "next/link";
import { Button, Col, Container, Row } from "reactstrap";
import Modal from "../../components/Modal/Modal";
import Navigate from "../../components/Navigate/Navigate";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="header">
      <Container>
        <Row className="align-items-center">
          <Col md={2}>
            <Link href="/">
              <a className="logo">SmokeTime</a>
            </Link>
          </Col>
          <Col md={5} className="offset-md-1">
            <Navigate />
          </Col>
          <Col
            md={2}
            className="offset-md-2 d-flex flex-column align-items-end"
          >
            <Link href="tel:+79999999999">
              <a className="phone">+7 (999) 999-99-99</a>
            </Link>
            <Button onClick={() => setModalOpen(!modalOpen)}>
              Перезвоните мне!
            </Button>
          </Col>
        </Row>
      </Container>
      {modalOpen ? <Modal /> : null}
    </header>
  );
};

export default Header;
function setState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
