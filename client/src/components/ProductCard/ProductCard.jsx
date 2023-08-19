/* eslint-disable react/prop-types */
import "./ProductCard.scss";

import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  return (
    <div className="ProductCard">
      <div className="img">
        <img src={data.image} alt="" />
      </div>
      <div className="details">
        <h2>{data.name.substring(0, 80)}...</h2>
        <div className="rate">
          <p>{data.ratings}</p>
          <p>{data.no_of_ratings}</p>
        </div>
      </div>

      <div className="price">
        <h3>{data.discount_price}</h3>
        <p>{data.actual_price}</p>
        <button onClick={() => handleAdd()} className="btn">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
