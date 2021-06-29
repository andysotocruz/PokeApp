import React, { useContext, useEffect } from "react";
import { getAllPokemons } from "../hooks/api";
import Loading from "../componentes/Loading";
import { PokeContext } from "../Context/PokeContext";
import Card from "../Card/Card";

const Home = () => {
  const {
    APIstate: { pokemons },
    apiActions,
    dispatchAPI,
  } = useContext(PokeContext);

  const getPokemons = async () => {
    const pokemons = await getAllPokemons();
    dispatchAPI(apiActions.getAllPokemonsAction(pokemons));
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    getPokemons();
  }, []);

  return (
    <div className="mt-48 md:mt-32 px-10 min-h-screen">
      <p className="font-bold text-6xl pb-10">Poke App</p>
      {pokemons.length > 0 ? (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
          {pokemons.map((pokemon) => (
            <Card pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Loading classes="h-3/5 w-3/5 animate-spin" />
        </div>
      )}
    </div>
  );
};

export default Home;
