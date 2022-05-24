export const fetchPokemon = async (url) => {
  try {
    const response = await fetch(url);
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
    console.log("single pokemon from api", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
