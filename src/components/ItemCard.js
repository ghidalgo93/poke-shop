import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const ItemCard = (props) => {
  const [num, setNum] = useState(0);

  const handleAmountChange = (e) => {
    setNum(e.target.value);
  };
  const handleAdd = () => {
    props.handleCartAdd("foo");
  };

  const content = (
    <div className={"card"}>
      <img src={props.img} alt="pokemans" />
      <h3>{props.name}</h3>
      <div>
        <p>{`$${props.cost}`}</p>
        <input
          type="number"
          min={"0"}
          max={"100"}
          value={num}
          onChange={handleAmountChange}
        />
        <FontAwesomeIcon
          icon={faPlusCircle}
          onClick={handleAdd}
          className={"add-btn"}
        />
      </div>
    </div>
  );

  return content;
};

export default ItemCard;
