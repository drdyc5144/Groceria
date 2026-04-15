import Button from "../Components/Button";
import Header from "../Components/Header";
import "../Style/Cart.css";
import yam from "../assets/yam.jpg";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 10000;
  const [totalPrice, setTotalPrice] = useState(unitPrice);

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(unitPrice * newQuantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(unitPrice * newQuantity);
    }
  };

  return (
    <>
      <Header />
      <main className="AddToCartContainer">
        <section className="CartContainerLeft">
          <div className="CartTop">
            <h2>
              Your Cart ({quantity} item{quantity !== 1 ? "s" : ""})
            </h2>
            <nav className="CartNav">
              <ul>
                <li>Product</li>
                <li>Unit Price</li>
                <li>Quantity</li>
                <li>Total</li>
                <li>Remove</li>
              </ul>
            </nav>
          </div>
          <section className="CartBottom">
            <div className="cardholder">
              <div className="top">
                <div className="Image">
                  <img src={yam} alt="" />
                </div>
                <div className="Text">
                  <h3>Yam-Grade B</h3>
                  <p>500kg</p>
                </div>
              </div>
              <div className="bottom">
                <div className="bottomleft">
                  <p>Quantity</p>
                  <div className="btnholder">
                    <button onClick={decreaseQuantity}>
                      <FiMinus />
                    </button>
                    <button>{quantity}</button>
                    <button onClick={increaseQuantity}>
                      <FiPlus />
                    </button>
                  </div>
                  <Button text="Add more items" className="addmore" />
                </div>
                <div className="bottomright">
                  <h3>Unit Price: ₦{unitPrice.toLocaleString()}</h3>
                  <h3>Total: ₦{totalPrice.toLocaleString()}</h3>
                  <button className="remove">Remove</button>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="CartContainerRight">
          <div className="RightHolder">
            <div className="firsttext">
              <h3>
                Subtotal: <span>₦{totalPrice.toLocaleString()}</span>
              </h3>
            </div>
            <div className="secondtext">
              <input type="checkbox" />
              <p>
                i have read the instruction above and i agree to{" "}
                <span>Groceria’s Return Policy</span>
              </p>
            </div>
            <Button text="proceed to checkout" className="checkout" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
