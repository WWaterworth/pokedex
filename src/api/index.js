export const fetchAllPokemon = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=151"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchSinglePokemon = async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
