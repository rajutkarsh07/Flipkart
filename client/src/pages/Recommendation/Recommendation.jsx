import { useEffect, useState } from "react";
import "./Recommendation.scss";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import originalItems from "../../data/AirConditioners.json";
import { HashLoader } from "react-spinners";
import img from "../../images/noImg.png";

const Recommendation = () => {
  const item = useSelector((state) => state.recommendation);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendItem = [...new Set(item)];
  // console.log(uniqueArray);

  // let products = [];

  const dataFetch = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "https://grid-recommendation-xp08.onrender.com/predict",
        {
          products: sendItem,
        },
        config
      );
      // console.log(data);
      // console.log(data[0]);
      // console.log(originalItems[0]);

      // for (let i = 0; i < 20; i++) {
      //   products.push(originalItems[data.indices[i]]);
      // }
      setLoading(false);

      const recommendedProducts = data.indices
        .slice(0, 20)
        .map((index) => originalItems[index]);
      setProducts(recommendedProducts);

      console.log(products);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    if (sendItem.length > 0) {
      dataFetch();
    }
  }, []);

  return (
    <div className="recommendation">
      <h2 className="heading">Recommendation</h2>
      {loading ? <HashLoader color="#4a71d6" /> : ""}
      {products.length > 0 ? (
        products?.map((item, index) => (
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
              <button onClick={() => console.log("meow")} className="btn">
                add to cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="notRecommend">
          <h1>nothing in your recommendation</h1>
        </div>
      )}
    </div>
  );
};

export default Recommendation;
