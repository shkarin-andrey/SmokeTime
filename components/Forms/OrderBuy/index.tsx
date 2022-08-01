import axios from "axios";
import { Formik, Form } from "formik";
import { FC } from "react";
import { Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { initialValues, validationSchema } from "./config";
import { initialValuesOrderBuy } from "./type";
import useAlert from "./../../../hooks/useAlert";

const OrderBuy: FC = () => {
  const { showAlert } = useAlert();

  const onSubmit = async (
    values: initialValuesOrderBuy,
    setSubmitting: (e: boolean) => void,
    resetForm: () => void
  ) => {
    try {
      await axios.post(`${process.env.BASE_URL}/api/sendgrid`, {
        body: JSON.stringify(values),
      });
      showAlert("Заказ успешно оформлен", "success");
    } catch (error) {
      console.log(error);

      showAlert("Что-то пошло не так", "danger");
    }
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) =>
        onSubmit(values, setSubmitting, resetForm)
      }
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  invalid={errors.lastName && touched.lastName ? true : false}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  invalid={errors.firstName && touched.firstName ? true : false}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.patronymic}
                  invalid={
                    errors.patronymic && touched.patronymic ? true : false
                  }
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
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tel}
              invalid={errors.tel && touched.tel ? true : false}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress">Адрес СДЭК</Label>
            <Input
              id="exampleAddress"
              name="address"
              placeholder="ул. Гастело, д.24, к.8"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              invalid={errors.address && touched.address ? true : false}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleCity">Город</Label>
            <Input
              id="exampleCity"
              name="city"
              placeholder="Самара"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              invalid={errors.city && touched.city ? true : false}
            />
          </FormGroup>
          <p className="text-center">
            Отправляя форму Вы подтверждаете политику конфиденциальности
          </p>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="d-block mx-auto"
          >
            Оформить заказ
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default OrderBuy;
