import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles/App.css";

const Nav = (props) => {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    addTotalAmounts();
  }, [props.cart]);

  const addTotalAmounts = () => {
    let tot = props.cart.reduce((accumulator, curVal) => {
      return accumulator + Number(curVal.amount);
    }, 0);
    setSum(tot);
  };

  return (
    <nav>
      <Link to="/" className="react-link">
        <FontAwesomeIcon icon={faDotCircle} size={"3x"} pulse />
      </Link>
      <ul className="nav-links">
        <Link to="/about" className="react-link">
          <li>About</li>
        </Link>
        <Link to="/shop" className="react-link">
          <li>Shop</li>
        </Link>
        <Link to="/cart" className="react-link">
          <li className="cart-sticky">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p>{sum}</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
