import { fetchAllPokemon, fetchSinglePokemon } from "../api";
import { useState, useEffect } from "react";
import {
  Basic,
  Cards,
  CardDisplay,
  Header,
  Types,
  Stats,
  Abilities,
} from "./index";

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getAllPokemon = async () => {
      const allPokemon = await fetchAllPokemon();
      setPokemon(allPokemon.results);
    };
    getAllPokemon();
  }, [setPokemon]);

  return (
    <main>
      <Header />
      <div className="body">
        <CardDisplay pokemon={pokemon} />
      </div>
    </main>
  );
};

export default App;
