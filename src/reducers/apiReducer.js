import { types } from "../types/Types";

export const initialAPIstate = {
  pokemons: [],
};

const APIreducer = (state = initialAPIstate, action) => {
  switch (action.type) {
    case types.getAllPokemons:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
      break;
  }
};

export default APIreducer;
