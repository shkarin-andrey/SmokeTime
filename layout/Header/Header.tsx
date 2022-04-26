import Link from "next/link";
import { Button, Col, Container, Row } from "reactstrap";
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
            <Link href="tel:+79999999999">
              <a className="phone">+7 (999) 999-99-99</a>
            </Link>
            <Button>Перезвоните мне!</Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
