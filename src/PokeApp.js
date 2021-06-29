import React from "react";
import PokeProvider from "./Context/PokeContext";
import PokeRouter from "./routers/PokeRauter";

const PokeApp = () => {
  return (
    <PokeProvider>
      <PokeRouter />;
    </PokeProvider>
  );
};

export default PokeApp;
