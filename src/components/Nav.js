import React from "react";
import { fetchSinglePokemon } from "../api";

const Nav = ({ pokemon, setName, setType, setStats, setSprite, setId }) => {
  const getSinglePokemon = async (name) => {
    const singlePokemon = await fetchSinglePokemon(name);
    console.log(singlePokemon);
    setName(singlePokemon.name);
    setType(singlePokemon.types);
    setStats(singlePokemon.stats);
    setSprite(singlePokemon.sprites.front_default);
    setId(singlePokemon.id);
  };

  const handleSelect = (event) => {
    event.preventDefault();
    const name = event.target.value;
    getSinglePokemon(name);
  };

  return (
    <div>
      <nav>
        <label>Select a Pokemon: </label>
        <select onChange={handleSelect}>
          <option>Select a Pokemon</option>
          {pokemon &&
            pokemon.map((poke, idx) => {
              return <option key={idx}>{poke.name}</option>;
            })}
        </select>
      </nav>
    </div>
  );
};

export default Nav;
