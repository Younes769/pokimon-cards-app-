import React from "react";
import PokeDex from "./PokeDex";
import charizard from "./pics/charizard.png";
import pikachu from "./pics/pikachu.png";
import squirtle from "./pics/squirtle.png";

function App() {
  const pokemonCards = [
    {
      id: 1,
      name: "Pikachu",
      images: {
        im: pikachu,
      },
      hp: 35,
      attack: 55,
      type: "Electric",
    },
    {
      id: 2,
      name: "Charizard",
      images: {
        im: charizard,
      },
      hp: 78,
      attack: 84,
      type: "Fire",
    },
    {
      id: 3,
      name: "Squirtle",
      images: {
        im: squirtle,
      },
      hp: 44,
      attack: 48,
      type: "Water",
    },
  ];

  return (
    <div>
      <PokeDex pokemons={pokemonCards} />
    </div>
  );
}

export default App;
