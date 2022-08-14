import MainLayout from "../../layout";
import {
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { iDataItem } from "../../type/shopData";
import { Button, Col, Container, Input, Row } from "reactstrap";
import Image from "next/image";
import noImg from "../../public/img/no-img.png";
import { useEffect, useState } from "react";
import QuestionsLeft from "../../Screens/QuestionsLeft";
import useLocalStorage from "./../../hooks/useLocalStorage";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { countActions } from "../../store/reducers/cartSlice";
import { iCart } from "../../type/cart";

const ShopItem: NextPage<iDataItem> = ({
  id,
  name,
  price,
  volume,
  strong,
  taste,
  meta,
  brand,
}) => {
  const [count, setCount] = useState<number>(1);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [countLocal, setCountLocal] = useLocalStorage("count", 0);
  const [sumLocal, setSumLocal] = useLocalStorage("sum", 0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(countActions(countLocal));
  }, [countLocal]);

  const down = () => {
    if (+count > 1) {
      setCount((count) => count - 1);
    }
  };

  const up = () => setCount((count) => count + 1);

  const stateCart = {
    id,
    name,
    price,
    sum: count * price,
    count,
  };

  const filterItemsCard = (getCart: iCart[]) => {
    const filterCard = getCart.reduce((m: iCart[], o: iCart) => {
      const found = m.find((p: iCart) => p.id === o.id);
      if (found) {
        found.count += o.count;
        found.sum += o.sum;
      } else {
        m.push(o);
      }
      return m;
    }, []);

    setCart(filterCard);
    updateCount(filterCard);
    updateSum(filterCard);
  };

  const addItemsCard = () => filterItemsCard([...cart, stateCart]);

  const updateCount = (getCart: iCart[]) => {
    const updateCartCount = getCart.reduce((p: number, n: iCart) => {
      return p + n.count;
    }, 0);

    setCountLocal(updateCartCount);
  };

  const updateSum = (getCart: iCart[]) => {
    const updateCartSum = getCart.reduce((p: number, n: iCart) => {
      return p + n.sum;
    }, 0);
    setSumLocal(updateCartSum);
  };

  return (
    <MainLayout>
      <Container>
        <h1 className="big-title">
          Жидкость для вейпа <span>{name}</span>
        </h1>
      </Container>
      <section className="shop_item_card">
        <Container>
          <Row>
            <Col
              md={5}
              lg={4}
              className="shop_item_card_img d-flex justify-content-center position-relative"
            >
              <Image
                src={meta.img || noImg}
                alt={name}
                layout={"fill"}
                objectFit="cover"
                placeholder={"blur"}
                blurDataURL={meta.img}
              />
            </Col>
            <Col md={7} lg={8}>
              <div className="wrapper">
                <div className="shop_item_card__info">
                  <div className="shop_item_card__info-item">
                    <span>Бренд:</span> {brand}
                  </div>
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
                      <div className="up" onClick={up}>
                        &#10010;
                      </div>
                    </div>
                    <Button className="mt-2" onClick={addItemsCard}>
                      Добавить в карзину
                    </Button>
                  </div>
                </div>
              </div>
              <p className="descr">
                <span>Описание:</span> Жидкость для электронных парогенераторов
                «{name}». Это высококлассная линейка жидкостей на основе
                качественных компонентов.
              </p>
              <p className="descr">
                <span>Меры предосторожности:</span> Не рекомендуется тем, кто не
                курит и не употребляет никотин. Использовать только с
                сертифицированными pod-системами. Хранить в сухом и недоступном
                для детей месте. Избегать попадания прямых солнечных лучей.
                <span>
                  {" "}
                  Запрещается использование лицам не достигшим 18 лет
                </span>
                .
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <QuestionsLeft />
    </MainLayout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const title = context.query.name;

  const resp = await fetch(`${process.env.BASE_URL}/api/shop/${title}`);
  const dataItem = await resp.json();

  return { props: { ...dataItem } };
};

export default ShopItem;
