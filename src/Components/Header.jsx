import "../Style/Header.css";
import logo from "../assets/Group 2.png";
import Button from "./Button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  return (
    <main className="HeaderContainer">
      <section className="HeaderHolder">
        <div className="logo" onClick={() => nav("/")}>
          <img src={logo} alt="" />
          <p onClick={() => nav("/")}>Home</p>
        </div>
        <div className="menu">
          <Button
            onClick={() => nav("/store")}
            className="store"
            text="Stores"
          />
          <div className="Btnholder">
            <input type="text" placeholder="search for food items" />
            <span> Search</span>
          </div>
        </div>
        <div className="buttonHolder">
          <MdOutlineShoppingCart
            onClick={() => nav("/cart")}
            style={{ fontSize: "40px", color: "#02B928", cursor: "pointer" }}
          />
          <Button text="Register" className="Register" />
          <Button text="Login" />
        </div>
      </section>
    </main>
  );
};

export default Header;
