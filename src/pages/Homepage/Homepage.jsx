import { useState } from "react"; // Don't forget to import React
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/cartSlice";
import { addId } from "../../store/recommendationSlice";
import { Link } from "react-router-dom";
import ac from "../../data/AirConditioners.json";
import "./Homepage.scss";
import img from "../../images/noImg.png";

const Homepage = () => {
  const dispatch = useDispatch();

  const produ = useSelector((state) => state.recommendation);
  console.log(produ);

  const handleAdd = (item) => {
    dispatch(add(item));
    dispatch(addId(item.id));
  };

  const [visibleItems, setVisibleItems] = useState(20);

  const handleShowMore = () => {
    setVisibleItems(visibleItems + 20);
  };

  return (
    <div className="homepage">
      <div className="cta">
        <Link to="/recommendation" className="btn">
          My personal recommendation
        </Link>
      </div>

      <div className="contents">
        {ac?.slice(0, visibleItems).map((item, index) => (
          <div className="ProductCard" key={index}>
            <div className="img">
              <img
                src={item.image ? item.image : img}
                alt=""
                onError={(e) => {
                  e.target.src = img;
                }}
                width={300}
              />
            </div>
            <div className="details">
              <h2>{item.name.substring(0, 80)}...</h2>
              <div className="rate">
                <p>{item.ratings ? item.ratings : 0} ⭐</p>
                <p>{item.no_of_ratings ? item.no_of_ratings : 0} ratings</p>
              </div>
            </div>
            <div className="price">
              <h3>{item.discount_price}</h3>
              <p className="cut">{item.actual_price}</p>
              <button onClick={() => handleAdd(item)} className="btn">
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {visibleItems < ac.length && (
        <div className="show-more">
          <button onClick={handleShowMore} className="btn">
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Homepage;
