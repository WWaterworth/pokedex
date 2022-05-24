import { fetchPokemon, fetchSinglePokemon } from "../api";
import { useState, useEffect } from "react";

const App = () => {
  const [allPokemon, setPokemon] = useState([]);
  const [singlePokemon, setSinglePokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [stats, setStats] = useState([]);
  const [sprite, setSprite] = useState("");

  useEffect(() => {
    const getAllPokemon = async () => {
      const getPokemon = await fetchPokemon(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      );
      setPokemon(getPokemon.results);
    };

    const getPreview = async () => {
      const preview = await fetchSinglePokemon(
        "https://pokeapi.co/api/v2/pokemon/1/"
      );

      setSinglePokemon(preview);
      setAbilities(preview.abilities);
      setStats(preview.stats);
      setSprite(preview.sprites.front_default);
    };

    getPreview();
    getAllPokemon();
  }, [setPokemon]);

  const handleSelect = async (event) => {
    const name = event.target.value;
    setSelectedPokemon(event.target.value);

    const singlePoke = await fetchSinglePokemon(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );
    setSinglePokemon(singlePoke);
    setAbilities(singlePoke.abilities);
    setStats(singlePoke.stats);
    setSprite(singlePoke.sprites.front_default);
  };

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
      <h3>Id Number: {singlePokemon.id}</h3>
      <h3>
        Sprite: <img src={sprite} />{" "}
      </h3>
      <h3>Base Experience: {singlePokemon.base_experience}</h3>
      <h3>Height: {singlePokemon.height}"</h3>
      <h4>{selectedPokemon}'s Stats:</h4>
      {stats.map((stat) => {
        return (
          <>
            <p>
              {stat.stat.name}: {stat.base_stat}
            </p>
          </>
        );
      })}
      <h4>{selectedPokemon}'s Abilities</h4>
      {abilities.map((move) => {
        return (
          <div>
            <ul>
              <li>{move.ability.name}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default App;
