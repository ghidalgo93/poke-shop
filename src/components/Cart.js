import React from "react";
import "../styles/App.css";
import CartCard from "./CartCard";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const content = (
    <div className={"shop-container"}>
      {props.cart.map((cartItem) => (
        <CartCard
          key={cartItem.item.id}
          item={cartItem.item}
          num={cartItem.amount}
          handleCartAdd={props.handleCartAdd}
        />
      ))}
    </div>
  );

  return content;
};

export default Cart;
