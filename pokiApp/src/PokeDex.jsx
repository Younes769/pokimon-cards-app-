import React from "react";
import PokeCard from "./PokeCard";

function PokeDex({ pokemonList }) {
  return (
    <div className="pokedex">
      {pokemonList.map((pokemon,index) => (
        <PokeCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokeDex;
