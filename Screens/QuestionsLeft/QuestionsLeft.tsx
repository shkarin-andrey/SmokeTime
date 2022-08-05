import React, { FC } from "react";
import { Col, Container, Row } from "reactstrap";
import QuestionForm from "../../components/Forms/QuestionForm";
import { iQuestionsLeft } from "./QuestionsLeft.interface.";

const QuestionsLeft: FC<iQuestionsLeft> = ({ className }) => {
  return (
    <section className="questions_left mb-5">
      <Container>
        <Row>
          <Col className={`mt-3 mt-5 offset-md-2 ${className}`} md={8}>
            <QuestionForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuestionsLeft;
