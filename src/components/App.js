import { fetchPokemon, fetchSinglePokemon } from "../api";
import { useState, useEffect } from "react";
import { Basic } from "./index";

const App = () => {
  const [allPokemon, setPokemon] = useState([]);
  const [singlePokemon, setSinglePokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [stats, setStats] = useState([]);
  const [sprite, setSprite] = useState("");
  const [types, setTypes] = useState([]);

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
      setTypes(preview.types);
    };

    getAllPokemon();
    getPreview();
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
    setTypes(singlePoke.types);
  };

  return (
    <main>
      <nav className="navigation">
        <select className="dropdown" onChange={handleSelect}>
          {allPokemon.map((poke) => {
            return (
              <>
                <option>{poke.name}</option>
              </>
            );
          })}
        </select>
        <h1 className="welcome">Welcome to the Pokedex</h1>
      </nav>
      <div className="pokemonCard">
        {/* <div className="basicInfo">
          <h2>Selected Pokemon: {selectedPokemon}</h2>
          <h3>Id Number: {singlePokemon.id}</h3>
          <img src={sprite} />
          <h3>Base Experience: {singlePokemon.base_experience}</h3>
          <h3>Height: {singlePokemon.height}</h3>
          <h3>Weight: {singlePokemon.weight}</h3>
        </div> */}
        <Basic
          selectedPokemon={selectedPokemon}
          singlePokemon={singlePokemon}
          sprite={sprite}
        />
        <div className="types">
          <h4>{selectedPokemon}'s Types:</h4>
          {types.map((elem) => {
            return (
              <>
                <p>{elem.type.name}</p>
              </>
            );
          })}
        </div>
        <div className="stats">
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
        </div>
        <div className="abilities">
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
        </div>
      </div>
    </main>
  );
};

export default App;
