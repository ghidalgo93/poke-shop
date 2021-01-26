import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../styles/App.css";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="react-link">
        <h3>Logo</h3>
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
            <p>0</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
