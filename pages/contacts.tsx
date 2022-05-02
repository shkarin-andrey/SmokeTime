import { Container, Row, Col, Form, Input, Button } from "reactstrap";
import MainLayout from "../layout";

const Contacts = () => {
  return (
    <MainLayout>
      <h1 className="big-title">Контакты</h1>
      <Container>
        <Row>
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
            <Form>
              <h2 className="title">Остались вопросы? Пишите:</h2>
              <Input className="mb-2" placeholder="Введите имя" required />
              <Input
                className="mb-2"
                type="email"
                placeholder="Введите Email адрес"
                required
              />
              <Input
                className="mb-2"
                type="textarea"
                placeholder="Введите сообщение"
                required
              />
              <Button className="d-block mx-auto mt-3">Отправить</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Contacts;
