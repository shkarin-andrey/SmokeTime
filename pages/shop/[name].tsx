import MainLayout from "../../layout";
import { NextPage } from "next";
import { iDataItem } from "../../type";
import { Button, Col, Container, Row } from "reactstrap";
import Image from "next/image";
import noImg from "../../public/img/no-img.png";

const ShopItem: NextPage<iDataItem> = ({ id, name, price, volume, strong }) => {
  return (
    <MainLayout>
      <h1 className="big-title">
        Жидкость для вейпа <span>{name}</span>
      </h1>
      <section className="shop_item_card">
        <Container>
          <Row>
            <Col md={4} className="d-flex justify-content-center">
              <Image src={noImg} alt={name} />
            </Col>
            <Col md={8}>
              <div className="wrapper">
                <div className="shop_item_card__info">
                  <div className="shop_item_card__info-item">
                    <span>Вкус:</span> с клубликой
                  </div>
                  {strong ? (
                    <div className="shop_item_card__info-item">
                      <span>Крепость:</span> {strong}мг
                    </div>
                  ) : null}

                  <div className="shop_item_card__info-item">
                    <span>Объем:</span> {volume}мл
                  </div>
                  <div className="shop_item_card__info-item">
                    <span>Артикул:</span> FAS123DF
                  </div>
                </div>
                <div className="shop_item_card__order">
                  <div className="prev">{price * 1.2},00 руб.</div>
                  <div className="new">
                    {price}
                    <span>,00 руб.</span>
                  </div>
                  <Button>Добавить в карзину</Button>
                </div>
              </div>
              <p className="descr">
                <span>Описание:</span> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Pharetra suspendisse vitae congue cras rhoncus
                turpis ullamcorper. Egestas vivamus ut et morbi. Arcu, in enim,
                cras duis pellentesque eu in. Velit blandit platea cras pretium
                lobortis. Tempor vestibulum ultrices purus integer enim in
                turpis magna. Elementum congue quis odio eget. Convallis id
                porttitor ipsum, nibh congue nisl, aenean. Faucibus aliquam
                fermentum orci praesent non id imperdiet eget et.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </MainLayout>
  );
};

ShopItem.getInitialProps = async ({ query }) => {
  const id = query.name;

  const resp = await fetch(`${process.env.BASE_URL}/api/shop/${id}`);
  const dataItem = await resp.json();

  return { ...dataItem };
};

export default ShopItem;
