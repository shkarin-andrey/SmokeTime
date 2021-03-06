import { Col, Container, Row } from "reactstrap";
import Accordion from "../Accordion/Accordion";
import { accordionList } from "./accordionList";

const FAQ = () => {
  return (
    <section className="faq">
      <Container>
        <h2 className="title">Часто задаваемые вопросы</h2>
        <Row className="mt-5">
          <Col xl={8} className="offset-xl-2">
            <Accordion accordionList={accordionList} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
