import "./Navbar.scss";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../images/flipkartlogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="searchbox">
        <input type="text" placeholder="Search Items" />
        <AiOutlineSearch className="icon" />
      </div>

      <div className="container">
        <Link className="btn-box" to="/cart">
          Cart({items.length})
          <AiOutlineShoppingCart className="icon" />
        </Link>
        <Link className="btn" to="/auth">
          Login / Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
