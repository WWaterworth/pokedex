export const fetchAllPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchSinglePokemon = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
