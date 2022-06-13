import React from "react";
import {
  fetchSinglePokemon,
  fetchAllPokemon,
  fetchGenTwo,
  fetchGenThree,
} from "../api";

const Nav = ({
  pokemon,
  setPokemon,
  setName,
  setType,
  setStats,
  setSprite,
  setId,
}) => {
  const getSinglePokemon = async (name) => {
    const singlePokemon = await fetchSinglePokemon(name);
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

  const handleGenTwo = async (event) => {
    event.preventDefault();
    const genTwo = await fetchGenTwo();
    setPokemon(genTwo.results);
  };

  const handleGenThree = async (event) => {
    event.preventDefault();
    const genThree = await fetchGenThree();
    setPokemon(genThree.results);
  };

  const handleGenOne = async (event) => {
    event.preventDefault();
    const genOne = await fetchAllPokemon();
    setPokemon(genOne.results);
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
        <button onClick={handleGenOne}>Gen 1</button>
        <button onClick={handleGenTwo}>Gen 2</button>
        <button onClick={handleGenThree}>Gen 3</button>
      </nav>
    </div>
  );
};

export default Nav;
