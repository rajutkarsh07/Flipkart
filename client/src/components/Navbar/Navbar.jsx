import "./Navbar.scss";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../images/flipkartlogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <div className="searchbox">
        <input type="text" placeholder="Search Candidate" />
        <AiOutlineSearch className="icon" />
      </div>

      <div className="container">
        <div className="btn-box">
          Cart
          <AiOutlineShoppingCart className="icon" />
        </div>
        <button className="btn">Login / Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
