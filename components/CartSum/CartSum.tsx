import { FC } from "react";
import { iCartSum } from "./CartSum.interface";

const CartSum: FC<iCartSum> = ({ count, sum }) => {
  const formatNumber = (number: number) => {
    return new Intl.NumberFormat("ru-RU").format(number);
  };

  return (
    <>
      <h2 className="title text-md-start text-center">Итого:</h2>
      <div className="cart__count">
        Количество: <span>{formatNumber(count)}</span> шт.
      </div>
      <div className="cart__sum">
        Сумма: <span>{formatNumber(sum)}</span> руб.
      </div>
    </>
  );
};

export default CartSum;
