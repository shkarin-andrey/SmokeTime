import ShopCards from "../../components/ShopCards/ShopCards";
import MainLayout from "../../layout";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { iData } from "../../type/shopData";
import { Col, Container, Row } from "reactstrap";
import Filter from "../../components/Filter/Filter";
import QuestionsLeft from "../../Screens/QuestionsLeft";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { shopActions, pagesActions } from "../../store/reducers/shopSlice";
import { useEffect } from "react";

const Shop: NextPage<iData> = ({ shop, pages }) => {
  const title = `Купить оптом жидкость для вейпа по низким ценам`;
  const description = `Купить брендовые жидкости для вейпа (электронных сигарет) по оптовым ценам. Отличный выбор в интернет-магазине жидкостей для электронных сигарет SmokeTimeOpt`;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(shopActions(shop));
    dispatch(pagesActions(pages));
  }, [shop, pages]);

  return (
    <MainLayout title={title} description={description}>
      <Container>
        <h1 className="big-title">Магазин жидкостей для вейпа</h1>
        <Row>
          <Col md={3}>
            <Filter />
          </Col>
          <Col md={9}>
            <ShopCards />
          </Col>
        </Row>
      </Container>
      <QuestionsLeft />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { page, brand, strong, volume, search } = context.query;

  const querySearch = search ? `search=${search}&` : "";
  const queryBrand = brand ? `brand=${brand}&` : "";
  const queryStrong = strong ? `strong=${strong}&` : "";
  const queryVolume = volume ? `volume=${volume}&` : "";
  const queryPage = `page=${page}`;

  if (brand || strong || volume || page || brand) {
    const url = `${process.env.BASE_URL}api/shop?limit=21&${
      querySearch + queryBrand + queryStrong + queryVolume + queryPage
    }`;

    const resp = await fetch(url);
    const shop = await resp.json();
    return {
      props: { ...shop },
    };
  }

  const url = `${process.env.BASE_URL}api/shop?limit=21&${queryPage}`;

  const resp = await fetch(url);
  const shop = await resp.json();
  return {
    props: { ...shop },
  };
};

export default Shop;
