import { useRouter } from "next/router";
import Cart from "../../public/icons/cart";
import React, { FC, useState } from "react";

const VidgetCart: FC = () => {
  const router = useRouter();
  let getFirstState;

  if (localStorage.getItem("count") !== null) {
    getFirstState = JSON.parse(localStorage.getItem("count") || "");
  } else {
    localStorage.setItem("count", JSON.stringify(0));
    localStorage.setItem("sum", JSON.stringify(0));
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const [count, setCount] = useState(getFirstState);

  const getState = () => {
    const newCount = JSON.parse(localStorage.getItem("count") || "");
    if (newCount !== count) {
      setCount(JSON.parse(localStorage.getItem("count") || ""));
    }
  };

  setInterval(() => getState(), 100);

  return (
    <div className="vidget-cart" onClick={() => router.push("/cart")}>
      {count > 0 && <div className="count">{count}</div>}
      <Cart />
    </div>
  );
};

export default VidgetCart;
