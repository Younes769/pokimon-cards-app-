import React from "react";


function PokeInfo({ pokemon }) {
  const types = pokemon.types.map(typeInfo => typeInfo.type.name).join(", ");
  const hp = pokemon.stats.find(stat => stat.stat.name === "hp").base_stat;
  const attack = pokemon.stats.find(stat => stat.stat.name === "attack").base_stat;

  return (
    <div className="pokeinfo">
      <p>Type: {types}</p>
      <p>HP: {hp}</p>
      <p>Attack: {attack}</p>
    </div>
  );
}

export default PokeInfo;
