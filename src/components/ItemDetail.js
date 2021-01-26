import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ match }) => {
  useEffect(() => {
    // fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {},
  });

  // const fetchItem = async () => {
  //   const response = await fetch(
  //     `https://fortnite-api.com/v2/cosmetics/br/${match.params.id}`
  //   );
  //   const item = await response.json();
  //   console.log(item.data);
  //   setItem(item.data);
  // };

  return <div></div>;
};

export default ItemDetail;
