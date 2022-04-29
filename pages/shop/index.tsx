import ShopCards from "../../components/ShopCards/ShopCards";
import MainLayout from "../../layout";
import { NextPage } from "next";
import { iData } from "./../../type";
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
  const page = query.page;

  const resp = await fetch(
    `${process.env.BASE_URL}/api/shop?limit=21${page ? "&page=" + page : ""}`
  );
  const shop = await resp.json();

  return { ...shop };
};

export default Shop;
