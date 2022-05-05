import BrandsCards from "../components/BrandsCards/BrandsCards";
import MainLayout from "../layout";
import { context } from "../components/BrandsCards/context";

const Brands = () => {
  return (
    <MainLayout>
      <h2 className="big-title">Бренды жидкостей для вейпа</h2>
      <BrandsCards context={context} />
    </MainLayout>
  );
};

export default Brands;
