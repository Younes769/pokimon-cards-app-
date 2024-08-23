import React, { useState } from "react";
import PokeInfo from './PokeInfo';

function PokeCard({ pokemon }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="pokecard" onClick={handleClick}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>{pokemon.name}</p>
      {showInfo && <PokeInfo pokemon={pokemon} />}
    </div>
  );
}

export default PokeCard;
