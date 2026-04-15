import Header from "../Components/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCreditCard, FaUniversity } from "react-icons/fa";
import "../Style/Checkout.css";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="CheckoutContainer">
        <div className="CheckoutWrapper">
          <div className="BackButton" onClick={() => navigate("/cart")}>
            <FaArrowLeft className="BackIcon" />
            <span>Back to Cart</span>
          </div>

          <h1 className="CheckoutTitle">Checkout</h1>

          <div className="CheckoutGrid">
            <div className="CheckoutLeft">
              <div className="FormSection">
                <h2 className="SectionTitle">
                  <span className="StepNumber">1</span>
                  Contact Information
                </h2>
                <div className="FormRow">
                  <div className="FormGroup">
                    <label>First Name </label>
                    <input type="text" placeholder="Emmanuel" />
                  </div>
                  <div className="FormGroup">
                    <label>Last Name </label>
                    <input type="text" placeholder="Daniel" />
                  </div>
                </div>
                <div className="FormRow">
                  <div className="FormGroup">
                    <label>Email Address </label>
                    <input
                      type="email"
                      placeholder="emmanueldaniel@gmail.com"
                    />
                  </div>
                  <div className="FormGroup">
                    <label>Phone Number </label>
                    <input type="tel" placeholder="+234 806 300 5144" />
                  </div>
                </div>
              </div>

              <div className="FormSection">
                <h2 className="SectionTitle">
                  <span className="StepNumber">2</span>
                  Shipping Address
                </h2>
                <div className="FormGroup">
                  <label>Street Address </label>
                  <input type="text" placeholder="123 Main Street" />
                </div>
                <div className="FormRow">
                  <div className="FormGroup">
                    <label>City </label>
                    <input type="text" placeholder="Lagos" />
                  </div>
                  <div className="FormGroup">
                    <label>State </label>
                    <input type="text" placeholder="Lagos" />
                  </div>
                  <div className="FormGroup">
                    <label>ZIP Code </label>
                    <input type="text" placeholder="100001" />
                  </div>
                </div>
              </div>

              <div className="FormSection">
                <h2 className="SectionTitle">
                  <span className="StepNumber">3</span>
                  Payment Method
                </h2>
                <div className="PaymentMethods">
                  <label
                    className={`PaymentOption ${paymentMethod === "card" ? "active" : ""}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <FaCreditCard />
                    <span>Credit Card</span>
                  </label>
                  <label
                    className={`PaymentOption ${paymentMethod === "transfer" ? "active" : ""}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="transfer"
                      checked={paymentMethod === "transfer"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <FaUniversity />
                    <span>Bank Transfer</span>
                  </label>
                </div>

                {paymentMethod === "card" && (
                  <div className="CardDetails">
                    <div className="FormGroup">
                      <label>Card Number</label>
                      <input type="text" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="FormGroup">
                      <label>Name on Card</label>
                      <input type="text" placeholder="Emmanuel Daniel" />
                    </div>
                    <div className="FormRow">
                      <div className="FormGroup">
                        <label>Expiry Date</label>
                        <input type="text" placeholder="MM/YY" />
                      </div>
                      <div className="FormGroup">
                        <label>CVV</label>
                        <input type="password" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "transfer" && (
                  <div className="BankDetails">
                    <div className="BankInfo">
                      <h4>Bank Transfer Information</h4>
                      <div className="BankAccount">
                        <p>
                          <strong>Bank Name:</strong> First Bank of Nigeria
                        </p>
                        <p>
                          <strong>Account Name:</strong> Groceria Store
                        </p>
                        <p>
                          <strong>Account Number:</strong> 1234567890
                        </p>
                        <p>
                          <strong>Sort Code:</strong> 011234567
                        </p>
                      </div>
                      <div className="TransferInstruction">
                        <p>
                          After making the transfer, please use your Order ID as
                          reference.
                        </p>
                        <p>
                          The order will be confirmed once payment is received.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button className="PlaceOrderBtn">Place Order</button>
            </div>

            <div className="CheckoutRight">
              <div className="OrderSummary">
                <h3>Order Summary</h3>

                <div className="OrderItems">
                  <div className="OrderItem">
                    <div className="ItemInfo">
                      <span className="ItemName">Yam-Grade B</span>
                      <span className="ItemQuantity">x2</span>
                    </div>
                    <span className="ItemPrice">₦20,000</span>
                  </div>
                  <div className="OrderItem">
                    <div className="ItemInfo">
                      <span className="ItemName">Rice - 5kg</span>
                      <span className="ItemQuantity">x1</span>
                    </div>
                    <span className="ItemPrice">₦8,500</span>
                  </div>
                  <div className="OrderItem">
                    <div className="ItemInfo">
                      <span className="ItemName">Beans - 2kg</span>
                      <span className="ItemQuantity">x3</span>
                    </div>
                    <span className="ItemPrice">₦6,000</span>
                  </div>
                </div>

                <div className="PriceBreakdown">
                  <div className="PriceRow">
                    <span>Subtotal</span>
                    <span>₦34,500</span>
                  </div>
                  <div className="PriceRow">
                    <span>Delivery Fee</span>
                    <span>₦1,500</span>
                  </div>
                  <div className="PriceRow">
                    <span>Tax</span>
                    <span>₦500</span>
                  </div>
                  <div className="PriceRow Total">
                    <span>Total</span>
                    <span>₦36,500</span>
                  </div>
                </div>

                <div className="SecureCheckout">
                  <p>✅ Secure Checkout - Your information is protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
