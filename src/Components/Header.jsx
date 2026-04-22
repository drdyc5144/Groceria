import { useContext } from "react";
import "../Style/Header.css";
import logo from "../assets/Group 2.png";
import Button from "./Button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Header = () => {
  const nav = useNavigate();
  const { state } = useContext(CartContext);

  return (
    <main className="HeaderContainer">
      <section className="HeaderHolder">
        <div className="logo" onClick={() => nav("/")}>
          <img src={logo} alt="" />
          <p onClick={() => nav("/")}>Home</p>
        </div>
        <div className="menu">
          <Button
            onClick={() => nav("/products")}
            className="store"
            text="Stores"
          />
          <div className="Btnholder">
            <input type="text" placeholder="search for food items" />
            <span> Search</span>
          </div>
        </div>
        <div className="buttonHolder">
          <div className="cart-wrapper">
            <MdOutlineShoppingCart
              onClick={() => nav("/cart")}
              className="cart-icon"
            />
            <span className={`cart-count ${state.length === 0 ? "empty" : ""}`}>
              {state.length}
            </span>
          </div>
          <Button text="Register" className="Register" />
          <Button text="Login" />
        </div>
      </section>
    </main>
  );
};

export default Header;
