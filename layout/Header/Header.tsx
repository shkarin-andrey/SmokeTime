import { useState } from "react";
import Link from "next/link";
import { Button, Col, Container, Row } from "reactstrap";
import Modal from "../../components/Modal/Modal";
import Navigate from "../../components/Navigate/Navigate";

const Header = () => {
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
            <Link href="tel:+79272971619">
              <a className="phone">+7 (927) 297-16-19</a>
            </Link>
            <Button onClick={() => console.log("click")}>
              Перезвоните мне!
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
