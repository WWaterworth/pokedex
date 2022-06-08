import { fetchAllPokemon, fetchGenTwo } from "../api";
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

  const getGenTwo = async () => {
    const genTwo = await fetchGenTwo();
    console.log(genTwo.results);
  };
  getGenTwo();

  return (
    <main>
      <Header
        pokemon={pokemon}
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
