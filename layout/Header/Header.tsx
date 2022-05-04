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
          <Col
            xs={8}
            sm={5}
            md={6}
            lg={2}
            className="order-2 order-lg-1 text-center text-lg-start"
          >
            <Link href="/">
              <a className="logo">SmokeTime</a>
            </Link>
          </Col>
          <Col xs={2} lg={6} xl={5} className="offset-lg-1 order-1 order-lg-2">
            <Navigate />
          </Col>
          <Col
            xs={12}
            sm={4}
            lg={3}
            className="offset-xl-1 d-flex flex-column align-items-center align-items-sm-end order-3 order-lg-3 mt-2 mt-sm-0"
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
