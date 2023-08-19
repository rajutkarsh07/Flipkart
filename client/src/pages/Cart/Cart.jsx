import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import { remove } from "../../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const handleRemove = (itemId) => {
    dispatch(remove(itemId));
  };

  console.log(items);

  return (
    <div className="cart">
      <h3>Cart</h3>
      <div className="card-container">
        {items.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            <p>{item.price}</p>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              remove from cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
