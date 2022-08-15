import Link from "next/link";
import React, { FC } from "react";
import { Container, Row, Col } from "reactstrap";
import Map from "../../components/Map/Map";

const ContactsInfo: FC = () => {
  return (
    <section className="contacts_info">
      <Map className="mt-0" />
    </section>
  );
};

export default ContactsInfo;
