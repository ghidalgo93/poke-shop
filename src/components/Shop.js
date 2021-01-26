import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Pokedex from "pokedex-promise-v2";
import { Link } from "react-router-dom";
const P = new Pokedex();

const Shop = () => {
  useEffect(() => {
    fetchPokemon();
  }, []);

  const [items, setItems] = useState([]);

  const fetchPokemon = async () => {
    const pokemons = await P.getPokemonsList({ limit: 20 });
    const pokemonsList = await pokemons.results;
    const urls = pokemonsList.map((p) => p.url);
    P.resource(urls).then(function (response) {
      console.log(response);
      setItems(response);
    });
  };

  const itemCards = items.map((item) => (
    <div key={item.id} className={"item"}>
      <img src={item.sprites.front_default} alt="pokemans" />
      <h3>{item.name}</h3>
      <div className="row">
        <p>{`$${item.base_experience}`}</p>
      </div>
    </div>
  ));

  return <div className={"shop-container"}>{itemCards}</div>;
};

export default Shop;
