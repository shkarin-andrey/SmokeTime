import { useRouter } from "next/router";
import Cart from "../../public/icons/cart";
import React, { FC } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

const VidgetCart: FC = () => {
  const router = useRouter();
  const { count } = useAppSelector((state) => state.cart);

  return (
    <div className="vidget-cart" onClick={() => router.push("/cart")}>
      {count > 0 && <div className="count">{count}</div>}
      <Cart />
    </div>
  );
};

export default VidgetCart;
