import { fetchAllPokemon } from "../api";
import { useState, useEffect } from "react";
import { CardDisplay, Header } from "./index";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [name, setName] = useState("");
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);
  const [sprite, setSprite] = useState("");

  useEffect(() => {
    const getAllPokemon = async () => {
      const allPokemon = await fetchAllPokemon();
      setPokemon(allPokemon.results);
    };

    getAllPokemon();
  }, [setPokemon]);

  return (
    <main>
      <Header
        pokemon={pokemon}
        setName={setName}
        setType={setTypes}
        setStats={setStats}
        setSprite={setSprite}
      />
      <div className="body">
        <CardDisplay name={name} stats={stats} types={types} sprite={sprite} />
      </div>
    </main>
  );
};

export default App;
