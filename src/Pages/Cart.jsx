import Button from "../Components/Button";
import Header from "../Components/Header";
import "../Style/Cart.css";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  if (!state || state.length === 0) {
    return (
      <>
        <Header />
        <div className="empty-cart">
          <h2>Your cart is empty 🛒</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="AddToCartContainer">
        <section className="CartContainerLeft">
          <div className="CartTop">
            <h2>Your Cart ({state.length})</h2>
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
            {state.map((item) => (
              <div className="cardholder" key={item.id}>
                <div className="top">
                  <div className="Image">
                    <img
                      src={item.image || item.images?.[0]}
                      alt={item.title}
                    />
                  </div>

                  <div className="Text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>

                <div className="bottom">
                  <div className="bottomleft">
                    <p>Quantity</p>

                    <div className="btnholder">
                      <button
                        onClick={() => {
                          dispatch({
                            type: "DECREASE_QUANTITY",
                            payload: item.id,
                          });
                        }}
                      >
                        <FiMinus />
                      </button>

                      <button>{item.quantity || 0}</button>

                      <button
                        onClick={() => {
                          console.log(item.id);
                          dispatch({
                            type: "INCREASE_QUANTITY",
                            payload: item.id,
                          });
                        }}
                      >
                        <FiPlus />
                      </button>
                    </div>

                    <Button text="Add more items" className="addmore" />
                  </div>

                  <div className="bottomright">
                    <h3>Unit Price: ₦ {item.price}</h3>

                    <h3>Total: ₦ {item.price * (item.quantity || 1)}</h3>

                    <button
                      className="remove"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item.id,
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>

        {state.length > 0 && (
          <section className="CartContainerRight">
            <div className="RightHolder">
              <div className="firsttext">
                <h3>
                  Subtotal:{" "}
                  <span>
                    ₦
                    {state.reduce(
                      (acc, item) => acc + item.price * (item.quantity || 1),
                      0,
                    )}
                  </span>
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
        )}
      </main>
    </>
  );
};

export default Cart;
