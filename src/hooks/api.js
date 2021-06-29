const baseURL = "https://pokeapi.co/api/v2/pokemon/";

export const getAllPokemons = async (query) => {
  let pokemons = [];

  try {
    const info = await fetch(`${baseURL}?limit=250?offset=200`);
    const data = await info.json();

    for await (let pokemon of data.results) {
      const info = await fetch(pokemon.url);
      const result = await info.json();

      pokemons.push(result);
    }

    return pokemons;
  } catch (error) {
    console.log(error);
  }
};
