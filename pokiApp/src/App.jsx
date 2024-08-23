import React from "react";
import PokeDex from "./PokeDex";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState([]);

  const changeUrl = (newUrl) => {
    setUrl(newUrl);
  };

  const pokemonFetch = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      console.log("resulte first url :", res);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPokemons(res.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const getPokemons = async (res) => {
    const pokemonData = await Promise.all(
      res.map(async (pokemon) => {
        const result = await axios.get(pokemon.url);
        return result.data;
        console.log(result);
      })
    );
    setPokemonList(pokemonData);
  };

  useEffect(() => {
    pokemonFetch();
  }, [url]);

  return (
    <div>
    {loading ? <h1>Loading...</h1> : <PokeDex pokemonList={pokemonList} />}
    <div className="pagination-container">
      {prevUrl && (
        <Pagination text="Previous" changeUrl={changeUrl} url={prevUrl} />
      )}
      {nextUrl && <Pagination text="Next" changeUrl={changeUrl} url={nextUrl} />}
    </div>
  </div>
    
  );
}
export default App;
