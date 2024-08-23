import React from "react";

function PokeInfo({ pokemon }) {
  return (
    <div className="pokeinfo">
      <p>Type: {pokemon.type}</p>
      <p>HP: {pokemon.hp}</p>
      <p>Attack: {pokemon.attack}</p>
    </div>
  );
}

export default PokeInfo;
