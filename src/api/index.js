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

export const fetchGenTwo = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=100&offset=151"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchGenThree = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=135&offset=251"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
