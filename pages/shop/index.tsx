import ShopCards from "../../components/ShopCards/ShopCards";
import MainLayout from "../../layout";

const Shop = () => {
  return (
    <MainLayout>
      <h1 className="big-title">Наш ассортимент жидкостей для вейпа</h1>
      <ShopCards />
    </MainLayout>
  );
};

export default Shop;
