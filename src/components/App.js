import { fetchPokemon, fetchSinglePokemon } from "../api";
import { useState, useEffect } from "react";

const App = () => {
  const [allPokemon, setPokemon] = useState([]);
  const [singlePokemon, setSinglePokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const getAllPokemon = async () => {
      const getPokemon = await fetchPokemon(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      );
      console.log("results from getPokemon", getPokemon.results);
      setPokemon(getPokemon.results);
    };
    getAllPokemon();
  }, [setPokemon]);

  const handleSelect = async (event) => {
    setSelectedPokemon(event.target.value);
    const singlePoke = await fetchSinglePokemon(
      `https://pokeapi.co/api/v2/pokemon/20/`
    );
    setSinglePokemon(singlePoke);
  };
  console.log("single pokemon state", singlePokemon);

  return (
    <>
      <h1>Welcome to the Pokedex</h1>
      <select onChange={handleSelect}>
        {allPokemon.map((poke) => {
          return (
            <>
              <option>{poke.name}</option>
            </>
          );
        })}
      </select>
      <h2>Selected Pokemon: {selectedPokemon}</h2>
    </>
  );
};

export default App;
