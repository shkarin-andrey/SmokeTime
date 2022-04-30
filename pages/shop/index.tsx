import ShopCards from "../../components/ShopCards/ShopCards";
import MainLayout from "../../layout";
import { NextPage } from "next";
import { iData } from "../../type/shopData";
import { Col, Container, Row } from "reactstrap";
import Filter from "../../components/Filter/Filter";

const Shop: NextPage<iData> = ({ shop, pages }) => {
  return (
    <MainLayout>
      <Container>
        <h1 className="big-title">Наш ассортимент жидкостей для вейпа</h1>
        <Row>
          <Col md={3}>
            <Filter />
          </Col>
          <Col md={9}>
            <ShopCards shop={shop} pages={pages} />
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

Shop.getInitialProps = async ({ query }) => {
  const { page, brand, strong, volume, search } = query;
  const url = `${process.env.BASE_URL}/api/shop?limit=21${
    brand ? "&brand=" + brand : ""
  }${strong ? "&strong=" + strong : ""}${search ? "&search=" + search : ""}${
    page ? "&page=" + page : ""
  }`;

  if (brand || strong || volume || page) {
    const resp = await fetch(url);
    const shop = await resp.json();
    return { ...shop };
  } else {
    const url = `${process.env.BASE_URL}/api/shop?&limit=21${
      page ? "&page=" + page : ""
    }`;

    const resp = await fetch(url);
    const shop = await resp.json();
    return { ...shop };
  }
};

export default Shop;
