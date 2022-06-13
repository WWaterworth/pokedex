import { fetchAllPokemon, fetchGenThree } from "../api";
import { useState, useEffect } from "react";
import { CardDisplay, Header } from "./index";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [name, setName] = useState("");
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);
  const [sprite, setSprite] = useState("");
  const [id, setId] = useState("");

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
        setPokemon={setPokemon}
        setName={setName}
        setType={setTypes}
        setStats={setStats}
        setSprite={setSprite}
        setId={setId}
      />
      <div className="body">
        <CardDisplay
          name={name}
          stats={stats}
          types={types}
          sprite={sprite}
          id={id}
        />
      </div>
    </main>
  );
};

export default App;
