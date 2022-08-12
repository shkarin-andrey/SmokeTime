/* eslint-disable @next/next/no-img-element */
import { Button, Container } from "reactstrap";
import noImg from "../../public/img/no-img.png";
import { useRouter } from "next/router";
import { FC } from "react";
import React from "react";
import { iBrandsCards } from "./BrandsCards.interface";
import { brandFilter } from "../../store/reducers/filterSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import Image from "next/image";

const BrandsCards: FC<iBrandsCards> = ({ context, btn }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // const bgImage = (bgImg: string | undefined) => {
  //   if (!bgImg) {
  //     return `url(${img.src}) center center / contain no-repeat`;
  //   }
  //   return `url(${bgImg}) center center / cover no-repeat`;
  // };

  const linkRouter = (link: string, brand: string) => {
    dispatch(brandFilter(brand));
    router.push(link);
  };

  return (
    <section className={`brands ${!btn ? "pt-0" : ""}`}>
      <Container>
        {btn && <h2 className="title">Бренды</h2>}
        <div className={`brands__grid mt-5 ${!btn ? "mb-5" : ""}`}>
          {context.map((item, i) => (
            <React.Fragment key={item.brand}>
              {btn && i < 6 && (
                <div
                  className="brands__grid__item position-relative"
                  onClick={() => linkRouter(item.link, item.brand)}
                  // style={{
                  //   background: bgImage(item?.img),
                  // }}
                >
                  <Image
                    src={item?.img || noImg}
                    alt={item.brand}
                    layout={"fill"}
                    blurDataURL={item?.img}
                    placeholder="blur"
                  />
                  <h3 className="brands__grid__item-title">
                    {item.brand}
                    <span>от {item.minPrice} руб.</span>
                  </h3>
                </div>
              )}
              {!btn && (
                <div
                  key={item.brand}
                  className="brands__grid__item position-relative"
                  onClick={() => linkRouter(item.link, item.brand)}
                  // style={{
                  //   background: bgImage(item?.img),
                  // }}
                >
                  <Image
                    src={item?.img || noImg}
                    alt={item.brand}
                    layout={"fill"}
                    blurDataURL={item?.img}
                    placeholder="blur"
                  />
                  <h3 className="brands__grid__item-title">
                    {item.brand}
                    <span>от {item.minPrice} руб.</span>
                  </h3>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        {btn ? (
          <Button
            className="d-block mx-auto mt-4"
            onClick={() => router.push("/brands")}
          >
            Все бренды
          </Button>
        ) : null}
      </Container>
    </section>
  );
};

export default BrandsCards;
