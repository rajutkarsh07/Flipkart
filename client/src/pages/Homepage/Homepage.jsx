import { useEffect, useState } from "react";
import "./Homepage.scss";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
// import { fetchProducts } from "../../store/productSlice";

const Homepage = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setItems(data);
    };
    fetchItems();
    // dispatch(fetchProducts());
  }, []);

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  // console.log(items);

  return (
    <div className="homepage">
      <div className="products">
        {items?.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            <p>{item.price}</p>
            <button className="btn-card" onClick={() => handleAdd(item)}>
              add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
