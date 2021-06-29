import { types } from "../types/Types";

const getAllPokemonsAction = (pokemons) => ({
  type: types.getAllPokemons,
  payload: { pokemons },
});

const apiActions = {
  getAllPokemonsAction,
};

export default apiActions;
