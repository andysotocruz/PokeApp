import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <Link
      to={`/pokemon/${pokemon.name}`}
      className="rounded-lg text-center my-5"
    >
      <div className="w-full rounded-t-lg h-40 flex justify-center items-center bg-blue-300 cursor-pointer">
        <img
          src={
            pokemon.sprites.front_default ||
            "https://play-lh.googleusercontent.com/GU2izEZOquAFv6oKKibJyq6yUYHaGSoiia6_A-K3RQ3Li56tMDTWoPdFxEotmjKVsuo"
          }
          alt=""
          className="h-30 w-24"
        />
      </div>
      <div className="p-5 border-r border-b border-l border-gray-200 rounded-lg rounded-t-none bg-red-200 ">
        <p className="font-light my-5 capitalize border-b-2 border-gray-900">
          {pokemon.name}
        </p>
      </div>
    </Link>
  );
};

export default Card;
