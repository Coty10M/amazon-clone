import { Link } from "react-router-dom";
import React from "react";
import { useStateValue } from "../Context/StateProvider";
import "../Styles/payment.css";
import CheckoutProduct from "./CheckoutProduct";

function Payments() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} Items</Link>{" "}
        </h1>
        <div className="payment__section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>Via Pigafetta 7</p>
              <p>10129 Torino</p>
            </div>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment_title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>payment Method</h3>
          </div>
          <div className="payment__details">{/* Stripe */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
