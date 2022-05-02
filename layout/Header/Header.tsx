import Link from "next/link";
import { Button, Col, Container, Row } from "reactstrap";
import Navigate from "../../components/Navigate/Navigate";
import { useDispatch } from "react-redux";
import { openModalAction } from "../../store/actions/modal";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const { showModal } = useSelector((state: any) => state.openModalReducer);
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
            <Button onClick={() => dispatch(openModalAction(!showModal))}>
              Перезвоните мне!
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
