import { Formik, Form } from "formik";
import React, { FC } from "react";
import { Input, Button } from "reactstrap";
import { initialValuesContacts, validationSchema } from "./config";
import { initialValuesContactsState } from "./type";
import useAlert from "../../../hooks/useAlert";
import axios from "axios";

const QuestionForm: FC = () => {
  const { showAlert } = useAlert();

  const onSubmit = async (
    values: initialValuesContactsState,
    setSubmitting: (e: boolean) => void,
    resetForm: () => void
  ) => {
    try {
      await axios.post(`${process.env.BASE_URL}/api/nodemailer/question`, {
        values,
      });

      showAlert("Сообщение успешно отправлено", "success");
      resetForm();
    } catch (error) {
      console.log(error);
      showAlert("Что-то пошло не так", "danger");
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValuesContacts}
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
          <h2 className="title mb-5">Остались вопросы? Пишите:</h2>
          <Input
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            className="mb-2"
            placeholder="Введите имя"
            invalid={errors.username && touched.username ? true : false}
          />
          <Input
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="mb-2"
            type="email"
            placeholder="Введите Email адрес"
            invalid={errors.email && touched.email ? true : false}
          />
          <Input
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            className="mb-2"
            type="textarea"
            placeholder="Введите сообщение"
            invalid={errors.message && touched.message ? true : false}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="d-block mx-auto mt-3"
          >
            Отправить
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default QuestionForm;
