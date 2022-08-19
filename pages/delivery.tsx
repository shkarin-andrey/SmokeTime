import MainLayout from "../layout";
import DeliveryInfo from "../Screens/DeliveryInfo";
import QuestionsLeft from "../Screens/QuestionsLeft";

const Delivery = () => {
  const title = `Доставка и оплата жидкостей для вейпа через почтовые компании СДЭК, ПочтаРоссии`;
  const description =
    "Доставляем заказы жидкостей для электронных сигарет по всей России. Мы работаем длительное время с компаниями СДЭК и ПочтаРоссии. Гарантируем скорость, качество и выгодную цену!";

  return (
    <MainLayout title={title} description={description}>
      <h1 className="big-title">Доставка и оплата</h1>
      <DeliveryInfo />
      <QuestionsLeft />
    </MainLayout>
  );
};

export default Delivery;
