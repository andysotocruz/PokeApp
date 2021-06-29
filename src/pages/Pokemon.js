import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokeContext } from "../Context/PokeContext";

const Pokemon = ({ history }) => {
  const [pokemonState, setPokemonState] = useState(null);
  const { name } = useParams();

  const {
    APIstate: { pokemons },
  } = useContext(PokeContext);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setPokemonState(pokemons.filter((pokemon) => pokemon.name === name)[0]);
  }, [name, pokemons]);

  const handleHome = () => history.push("/");

  return (
    <div className="mt-48 md:mt-32 px-10 min-h-screen">
      <p className="font-bold text-6xl pb-10">{pokemonState?.name}</p>
      <div className="w-screen flex justify-center itemscenter">
        <img
          src={pokemonState?.sprites.front_default}
          className="h-72 w-72"
          alt={pokemonState?.name}
        />
      </div>
      <div className="w-screen flex justify-around items center">
        <p className="font-bold text-lg">
          Height: <span className="font-normal">{pokemonState?.height}</span>{" "}
        </p>
        <p className="font-bold text-lg">
          Weight: <span className="font-normal">{pokemonState?.weight}</span>{" "}
        </p>
      </div>
      <div className="w-screen flex justify-center items-center">
        <button
          className="px-5 py-3 bg-blue-300 rounded-lg text-white focus:outoline:none hover:bg-blue-400 duration-300 transform hover:-translate-y-1 hover:scale-110"
          onClick={handleHome}
        >
          Got Home
        </button>
      </div>
    </div>
  );
};

export default Pokemon;
