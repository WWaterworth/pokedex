import { fetchPokemon, fetchSinglePokemon } from "../api";
import { useState, useEffect } from "react";
import { Basic, Types, Stats, Abilities } from "./index";

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
        <Basic
          selectedPokemon={selectedPokemon}
          singlePokemon={singlePokemon}
          sprite={sprite}
        />
        <Types types={types} selectedPokemon={selectedPokemon} />
        <Stats stats={stats} selectedPokemon={selectedPokemon} />
        <Abilities abilities={abilities} selectedPokemon={selectedPokemon} />
      </div>
    </main>
  );
};

export default App;
