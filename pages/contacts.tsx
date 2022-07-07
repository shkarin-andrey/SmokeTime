import { Container, Row, Col } from "reactstrap";
import Map from "../components/Map/Map";
import MainLayout from "../layout";
import QuestionsLeft from "../Screens/QuestionsLeft";

const Contacts = () => {
  return (
    <MainLayout>
      <h1 className="big-title">Контакты</h1>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
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
          <Col md={6}>
            <Map className="mt-0" />
          </Col>
        </Row>
      </Container>
      <QuestionsLeft />
    </MainLayout>
  );
};

export default Contacts;
