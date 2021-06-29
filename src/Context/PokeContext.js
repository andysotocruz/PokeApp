import React, { createContext, useReducer } from "react";
import apiReducer, { initialAPIstate } from "../reducers/apiReducer";
import apiActions from "../actions/apiActions";

export const PokeContext = createContext();

const PokeProvider = ({ children }) => {
  const [APIstate, dispatchAPI] = useReducer(apiReducer, initialAPIstate);

  return (
    <PokeContext.Provider value={{ APIstate, dispatchAPI, apiActions }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
