import { useRouter } from "next/router";
import { FC } from "react";
import { Button, Table } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { iCartTable } from "./CartTable.interface";
import { brandFilter } from "../../store/reducers/filterSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { iCart } from "../../type/cart";

const CartTable: FC<iCartTable> = ({
  cart,
  updateItemCart,
  deleteItemCart,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const linkRouter = (link: string, brand: string) => {
    dispatch(brandFilter(brand));
    router.push(link);
  };

  return (
    <>
      {cart.length > 0 ? (
        <Table bordered responsive>
          <thead>
            <tr>
              <th>№</th>
              <th>Название</th>
              <th>Количество, шт.</th>
              <th>Цена за шт.</th>
              <th>Сумма, руб</th>
              <th></th>
            </tr>
          </thead>
          <TransitionGroup className="cart-list" component={"tbody"}>
            {cart.map((item: iCart, i: number) => (
              <CSSTransition key={item.id} timeout={500} classNames="cart-item">
                <tr>
                  <th>{i + 1}</th>
                  <td>{item.name}</td>
                  <td>{new Intl.NumberFormat("ru-RU").format(item.count)}</td>
                  <td>{item.price}</td>
                  <td>{new Intl.NumberFormat("ru-RU").format(item.sum)}</td>
                  <td
                    onClick={() => {
                      deleteItemCart(item.id);
                      updateItemCart(item.count, item.sum);
                    }}
                  >
                    &#10008;
                  </td>
                </tr>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Table>
      ) : (
        <div className="mb-5 mt-5">
          <p className="text-center">Пока в корзине ничего нет.</p>
          <Button
            className="d-block mx-auto"
            onClick={() => linkRouter("/shop", "all")}
          >
            В магазин
          </Button>
        </div>
      )}
    </>
  );
};

export default CartTable;
