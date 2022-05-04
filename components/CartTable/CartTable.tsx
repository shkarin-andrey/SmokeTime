import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import { deleteCart, countCart, sumCart } from "../../store/actions/cart";

const CartTable: FC = () => {
  const { cart } = useSelector((state: any) => state.shopCart);
  const dispatch = useDispatch();

  const deleteItemCart = (id: string) => {
    const filterCart = cart.filter((x: any) => x.id !== id);
    dispatch(deleteCart(filterCart));
  };

  const updateItemCart = (count: number, sum: number) => {
    const updateCartCount = cart.reduce((p: number, n: any) => {
      return p + n.count;
    }, -count);
    dispatch(countCart(updateCartCount));
    const updateCartSum = cart.reduce((p: number, n: any) => {
      return p + n.sum;
    }, -sum);
    dispatch(sumCart(updateCartSum));
  };

  return (
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
      <tbody>
        {cart.map((item: any, i: number) => (
          <tr key={item.id} id={item.id}>
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
        ))}
      </tbody>
    </Table>
  );
};

export default CartTable;
