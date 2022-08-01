import { Col, Container, Row } from "reactstrap";
import MainLayout from "../layout";
import DeliveryInfo from "../Screens/DeliveryInfo";
import QuestionsLeft from "../Screens/QuestionsLeft";

const Delivery = () => {
  return (
    <MainLayout>
      <h1 className="big-title">Доставка и оплата</h1>
      <DeliveryInfo />
      <QuestionsLeft />
    </MainLayout>
  );
};

export default Delivery;
