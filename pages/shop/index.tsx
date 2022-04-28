import ShopCards from "../../components/ShopCards/ShopCards";
import MainLayout from "../../layout";
import { NextPage } from "next";
import { iData } from "./../api/shop/index";

const Shop: NextPage<iData> = ({ shop, pages }) => {
  return (
    <MainLayout>
      <h1 className="big-title">Наш ассортимент жидкостей для вейпа</h1>
      <ShopCards shop={shop} pages={pages} />
    </MainLayout>
  );
};

Shop.getInitialProps = async ({ query }) => {
  const page = query.page;

  const resp = await fetch(
    `${process.env.BASE_URL}/api/shop?limit=20${page ? "&page=" + page : ""}`
  );
  const shop = await resp.json();

  return { ...shop };
};

export default Shop;
