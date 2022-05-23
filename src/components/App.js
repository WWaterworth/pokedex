import { fetchPokemon } from "../api";

function App() {
  fetchPokemon("https://pokeapi.co/api/v2/pokemon/");
  return (
    <>
      <h1>Welcome to the Pokedex</h1>
    </>
  );
}

export default App;
