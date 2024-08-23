import React from "react";
import PokeCard from "./PokeCard";

function PokeDex({ pokemons }) {
  return (
    <div className="pokedex">
      {pokemons.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokeDex;
