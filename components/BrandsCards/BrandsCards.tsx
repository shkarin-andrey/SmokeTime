import { Button, Container } from "reactstrap";
import img from "../../public/img/no-img.png";
import { useRouter } from "next/router";
import { FC } from "react";
import React from "react";

interface iBrandsCards {
  context: iBrand[];
  btn?: boolean;
}

interface iBrand {
  brand: string;
  minPrice: string;
  link: string;
}

const BrandsCards: FC<iBrandsCards> = ({ context, btn }) => {
  const router = useRouter();
  return (
    <section className={`brands ${!btn ? "pt-0" : ""}`}>
      <Container>
        {btn && <h2 className="title">Бренды</h2>}
        <div className={`brands__grid mt-5 ${!btn ? "mb-5" : ""}`}>
          {context.map((item, i) => (
            <React.Fragment key={item.brand}>
              {btn && i < 5 && (
                <div
                  className="brands__grid__item"
                  onClick={() => router.push(item.link)}
                >
                  <img src={img.src} alt={item.brand} />
                  <h3 className="brands__grid__item-title">
                    {item.brand}
                    <span>от {item.minPrice} руб.</span>
                  </h3>
                </div>
              )}
              {!btn && (
                <div
                  key={item.brand}
                  className="brands__grid__item"
                  onClick={() => router.push(item.link)}
                >
                  <img src={img.src} alt={item.brand} />
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
