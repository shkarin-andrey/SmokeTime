import React, { FC } from "react";
import { Col, Container, Row } from "reactstrap";
import ContactsForm from "../../components/Forms/ContactsForm";

export interface iQuestionsLeft {
  className?: string;
}

const QuestionsLeft: FC<iQuestionsLeft> = ({ className }) => {
  return (
    <section className="questions_left">
      <Container>
        <Row>
          <Col className={`mt-3 mt-5 offset-md-2 ${className}`} md={8}>
            <ContactsForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuestionsLeft;
