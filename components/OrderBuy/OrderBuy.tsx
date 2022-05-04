import { FC } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

const OrderBuy: FC = () => {
  return (
    <Form>
      <h2 className="title">Оформление заказа</h2>
      <Row>
        <Col md={6} lg={4}>
          <FormGroup>
            <Label for="exampleLastName">Фамилия</Label>
            <Input
              id="exampleLastName"
              name="lastName"
              placeholder="Введите фамилию"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col md={6} lg={4}>
          <FormGroup>
            <Label for="exampleFirstName">Имя</Label>
            <Input
              id="exampleFirstName"
              name="firstName"
              placeholder="Введите имя"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col md={12} lg={4}>
          <FormGroup>
            <Label for="examplePatronymic">Отчество</Label>
            <Input
              id="examplePatronymic"
              name="patronymic"
              placeholder="Введите отчество"
              type="text"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleTel">Телефон</Label>
        <Input
          id="exampleTel"
          name="tel"
          placeholder="Введите номер телефона"
          type="tel"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress">Адрес СДЭК</Label>
        <Input
          id="exampleAddress"
          name="address"
          placeholder="ул. Гастело, д.24, к.8"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleCity">Город</Label>
        <Input id="exampleCity" name="city" placeholder="Самара" />
      </FormGroup>
      <p className="text-center">
        Отправляя форму Вы подтверждаете политику конфиденциальности
      </p>
      <Button className="d-block mx-auto">Оформить заказ</Button>
    </Form>
  );
};

export default OrderBuy;
