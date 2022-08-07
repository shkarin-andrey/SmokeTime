import { FC } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
import { CSSTransition } from "react-transition-group";
import support from "../../../public/img/support.jpg";
import { Formik, Form } from "formik";
import { initialValuesContacts, validationSchema } from "./config";
import { initialValuesContactsState } from "./type";
import axios from "axios";
import useAlert from "../../../hooks/useAlert";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { openModalAction } from "../../../store/reducers/modalSlice";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const CallBackForm: FC = () => {
  const dispatch = useAppDispatch();
  const { showModal } = useAppSelector((state) => state.openModal);

  showModal
    ? disableBodyScroll(document.body)
    : enableBodyScroll(document.body);

  const { showAlert } = useAlert();

  const onSubmit = async (
    values: initialValuesContactsState,
    setSubmitting: (e: boolean) => void,
    resetForm: () => void
  ) => {
    try {
      await axios.post(`${process.env.BASE_URL}/api/nodemailer/callBack`, {
        values: {
          ...values,
          createAt: new Date(),
        },
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
    <CSSTransition
      in={showModal}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div className={`modal d-flex`}>
        <Container className="d-flex align-items-center justify-content-center">
          <Row className="w-100">
            <Col
              md={8}
              className="offset-md-2 border rounded bg-dark position-relative"
            >
              <div
                className="close position-absolute top-0 end-0 p-2 fs-4"
                onClick={() => dispatch(openModalAction(false))}
              >
                &#10008;
              </div>
              <Row>
                <Col
                  lg={6}
                  className="py-3 py-lg-5 px-3 text-center text-lg-start"
                >
                  <h2>Обратная связь</h2>
                  <hr />
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
                        <Input
                          name="firstName"
                          placeholder="Введите ваше имя"
                          className="mb-2 mt-4 text-center text-lg-start"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                          invalid={
                            errors.firstName && touched.firstName ? true : false
                          }
                        />
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="Введите ваш номер телефона"
                          className="mb-4 text-center text-lg-start"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                          invalid={errors.phone && touched.phone ? true : false}
                        />
                        <p>
                          Отправляя форму Вы соглашаетесь с политикой
                          конфиденциальности.
                        </p>
                        <Button
                          className="w-auto px-5"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Запросить звонок
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Col>
                <Col lg={6} className="pe-lg-0 px-0 px-lg-2 d-none d-lg-block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-100 h-100"
                    src={support.src}
                    alt="SmokeTime"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </CSSTransition>
  );
};

export default CallBackForm;
