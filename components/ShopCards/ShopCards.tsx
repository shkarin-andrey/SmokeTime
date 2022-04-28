import { FC, useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import ShopCard from "../ShopCard/ShopCard";
import { iDataItem } from "../../pages/api/shop";
import PaginationList from "../Pagination/Pagination";
import { useRouter } from "next/router";

const ShopCards: FC = () => {
  const [shop, setShop] = useState([]);
  const [pages, setPages] = useState("");

  const router = useRouter();
  const page = router.query.page;

  useEffect(() => {
    fetch(
      `${process.env.BASE_URL}/api/shop?limit=20${page ? "&page=" + page : ""}`
    )
      .then((resp) => resp.json())
      .then((shopData) => {
        setShop(shopData.shop);
        setPages(shopData.pages);
      });
  }, [page]);

  return (
    <section className="shop">
      <Container>
        <div className="shop__cards">
          <Row>
            {shop.map((item: iDataItem) => (
              <ShopCard
                key={item.id}
                name={item.name}
                price={item.price}
                id={item.id}
              />
            ))}
          </Row>
        </div>
        <PaginationList pages={pages} />
      </Container>
    </section>
  );
};

export default ShopCards;
