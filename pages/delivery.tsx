import { Col, Container, Row } from "reactstrap";
import MainLayout from "../layout";

const Delivery = () => {
  return (
    <MainLayout>
      <h1 className="big-title">Доставка и оплата</h1>
      <Container>
        <Row>
          <Col md={8} className="offset-md-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, autem eligendi voluptas minima error esse. Sed rem,
              sequi deserunt, dolores impedit quis sit fugiat quia ducimus
              quaerat omnis mollitia eum laudantium accusamus voluptas
              cupiditate necessitatibus natus quisquam accusantium eaque
              adipisci quod. Quas in itaque voluptates aut optio neque assumenda
              aliquam.
            </p>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Delivery;
