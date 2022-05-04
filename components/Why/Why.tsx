import { Col, Container, Row } from "reactstrap";
import { whyCards } from "./whyCards";

const Why = () => {
  return (
    <section className="why">
      <Container>
        <h2 className="title">Почему мы?</h2>
        <Row className="mt-5">
          {whyCards.map((item, i) => (
            <Col key={i} md={4} className="why__card mb-5 mb-md-0">
              {item.component}
              <h3>{item.title}</h3>
              <p>{item.descr}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Why;
