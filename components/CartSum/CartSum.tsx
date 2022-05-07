import { FC } from "react";

const CartSum: FC = () => {
  const count = JSON.parse(localStorage.getItem("count") || "");
  const sum = JSON.parse(localStorage.getItem("sum") || "");
  return (
    <>
      <h2 className="title text-md-start text-center">Итого:</h2>
      <div className="cart__count">
        Количество: <span>{new Intl.NumberFormat("ru-RU").format(count)}</span>{" "}
        шт.
      </div>
      <div className="cart__sum">
        Сумма: <span>{new Intl.NumberFormat("ru-RU").format(sum)}</span> руб.
      </div>
    </>
  );
};

export default CartSum;
