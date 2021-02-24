import React from "react";
import { useStateValue } from "../Context/StateProvider";
import "../Styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1.=CB423492668_.jpg"
          alt=""
        />
      </div>
      <div>
        <h3>Hello, {user?.email}</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>
        {basket.map((item) => (
          <FlipMove>
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          </FlipMove>
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
