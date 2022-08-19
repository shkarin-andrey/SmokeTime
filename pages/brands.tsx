import BrandsCards from "../components/BrandsCards/BrandsCards";
import MainLayout from "../layout";
import { context } from "../components/BrandsCards/context";
import QuestionsLeft from "../Screens/QuestionsLeft";

const Brands = () => {
  const title = `Купить брендовые жидкости для вейпа оптом по выгодним ценам от 200 руб.`;
  const description =
    "Купить, а также заказать жидкости для эектронных сигарет брендов SkyVape, Toyz, VoodoLab, Hotspot, PraidVape и др. можно у у нас по выгодным ценам!";

  return (
    <MainLayout title={title} description={description}>
      <h2 className="big-title">Бренды жидкостей для вейпа</h2>
      <BrandsCards context={context} />
      <QuestionsLeft />
    </MainLayout>
  );
};

export default Brands;
