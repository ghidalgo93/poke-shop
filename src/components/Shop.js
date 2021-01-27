import React, { useState, useEffect } from "react";
import "../styles/App.css";
import ItemCard from "./ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Pokedex from "pokedex-promise-v2";
import { Link } from "react-router-dom";
const P = new Pokedex();

const Shop = (props) => {
  useEffect(() => {
    fetchPokemon();
  }, []);

  const [items, setItems] = useState([]);

  const fetchPokemon = async () => {
    const pokemons = await P.getPokemonsList({ limit: 20 });
    const pokemonsList = await pokemons.results;
    const urls = pokemonsList.map((p) => p.url);
    P.resource(urls).then(function (response) {
      setItems(response);
    });
  };

  const itemCards = items.map((item) => (
    <ItemCard
      key={item.id}
      img={item.sprites.front_default}
      name={item.name}
      cost={item.base_experience}
      handleCartAdd={props.handleCartAdd}
    />
  ));

  return <div className={"shop-container"}>{itemCards}</div>;
};

export default Shop;
