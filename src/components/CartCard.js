import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const CartCard = (props) => {
  const [num, setNum] = useState(0);

  const handleAmountChange = (e) => {
    setNum(e.target.value);
  };

  // const handleUpdate = () => {};
  // const handleRemove = () => {};

  useEffect(() => {
    setNum(props.num);
  }, []);

  const content = (
    <div className={"card"}>
      <img src={props.item.sprites.front_default} alt="pokemans" />
      <h3>{props.item.name}</h3>
      <div>
        <p>{`$${props.item.base_experience}`}</p>
        <input
          type="number"
          min={"0"}
          max={"100"}
          value={num}
          onChange={handleAmountChange}
        />
        <FontAwesomeIcon
          icon={faPlusCircle}
          // onClick={handleUpdate}
          className={"add-btn"}
        />
        <FontAwesomeIcon
          icon={faTimesCircle}
          // onClick={handleRemove}
          className={"remove-btn"}
        />
      </div>
    </div>
  );

  return content;
};

export default CartCard;
