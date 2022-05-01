import { useRouter } from "next/router";
import Cart from "../../public/icons/cart";
import { useSelector } from "react-redux";

const VidgetCart = () => {
  const router = useRouter();
  const { cart, count } = useSelector((state: any) => state.shopCart);

  return (
    <div className="vidget-cart" onClick={() => router.push("/cart")}>
      {cart.length > 0 && <div className="count">{count}</div>}
      <Cart />
    </div>
  );
};

export default VidgetCart;
