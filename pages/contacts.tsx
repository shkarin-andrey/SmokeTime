import { Container, Row, Col } from "reactstrap";
import Map from "../components/Map/Map";
import MainLayout from "../layout";
import ContactsInfo from "../Screens/ContactsInfo";
import QuestionsLeft from "../Screens/QuestionsLeft";

const Contacts = () => {
  return (
    <MainLayout>
      <h1 className="big-title">Контакты</h1>
      <ContactsInfo />
      <QuestionsLeft />
    </MainLayout>
  );
};

export default Contacts;
