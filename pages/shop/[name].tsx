import MainLayout from "../../layout";
import { NextPage } from "next";
import { iDataItem } from "../../type/shopData";
import { Button, Col, Container, Input, Row } from "reactstrap";
import Image from "next/image";
import noImg from "../../public/img/no-img.png";
import { useState } from "react";
import QuestionsLeft from "../../Screens/QuestionsLeft";

const ShopItem: NextPage<iDataItem> = ({
  id,
  name,
  price,
  volume,
  strong,
  taste,
}) => {
  const [count, setCount] = useState<number>(1);

  const down = () => {
    if (+count > 1) {
      setCount(+count - 1);
    }
  };

  const stateCart = {
    id,
    name,
    price,
    sum: count * price,
    count,
  };

  const filterItemsCard = (getCart: any) => {
    const filterCard = getCart.reduce((m: any, o: any) => {
      const found = m.find((p: any) => p.id === o.id);
      if (found) {
        found.count += o.count;
        found.sum += o.sum;
      } else {
        m.push(o);
      }
      return m;
    }, []);

    localStorage.setItem("cart", JSON.stringify(filterCard));
  };

  const addItemsCard = () => {
    const getCart = JSON.parse(localStorage.getItem("cart") || "");

    if (getCart.length > 0) {
      localStorage.setItem("cart", JSON.stringify([...getCart, stateCart]));
      filterItemsCard(JSON.parse(localStorage.getItem("cart") || ""));
    } else {
      localStorage.setItem("cart", JSON.stringify([stateCart]));
    }
  };

  const updateCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "");
    const updateCartCount = cart.reduce((p: number, n: any) => {
      return p + n.count;
    }, 0);
    localStorage.setItem("count", JSON.stringify(updateCartCount));
  };

  const updateSum = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "");
    const updateCartSum = cart.reduce((p: number, n: any) => {
      return p + n.sum;
    }, 0);
    localStorage.setItem("sum", JSON.stringify(updateCartSum));
  };

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
                    <span>Вкус:</span> {taste}
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
                    <span>Скидка:</span> -20%
                  </div>
                </div>
                <div className="shop_item_card__order">
                  <div className="prev">{price * 1.2},00 руб.</div>
                  <div className="new">
                    {price}
                    <span>,00 руб.</span>
                  </div>
                  <div className="card__bottom__order mt-4 align-items-end">
                    <div className="card__bottom__order-input">
                      <div className="down" onClick={down}>
                        &mdash;
                      </div>
                      <Input
                        type="number"
                        pattern="/\D/g"
                        bsSize={"sm"}
                        value={count}
                        onChange={(e) => setCount(Number(e.target.value))}
                      />
                      <div className="up" onClick={() => setCount(+count + 1)}>
                        &#10010;
                      </div>
                    </div>
                    <Button
                      className="mt-2"
                      onClick={async () => {
                        await addItemsCard();
                        updateCount();
                        updateSum();
                      }}
                    >
                      Добавить в карзину
                    </Button>
                  </div>
                </div>
              </div>
              <p className="descr">
                <span>Описание:</span> Жидкость для электронных парогенераторов
                «{name}». Это высококлассная линейка жидкостей на основе
                качественных компонентов. Меры предосторожности: Не
                рекомендуется тем, кто не курит и не употребляет никотин.
                Использовать только с сертифицированными pod-системами. Хранить
                в сухом и недоступном для детей месте. Избегать попадания прямых
                солнечных лучей. Запрещается использование лицам не достигшим 18
                лет.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <QuestionsLeft />
    </MainLayout>
  );
};

ShopItem.getInitialProps = async ({ query }) => {
  const title = query.name;

  const resp = await fetch(`${process.env.BASE_URL}/api/shop/${title}`);
  const dataItem = await resp.json();

  return { ...dataItem };
};

export default ShopItem;
