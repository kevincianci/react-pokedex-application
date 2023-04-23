import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonListItem from './PokemonListItem';
import Pagination from './Pagination';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching data...");
    setLoading(true);
    axios.get(currentPageUrl).then((response) => {
      setLoading(false);
      setNextPageUrl(response.data.next);
      setPrevPageUrl(response.data.previous);
      setPokemonList(response.data.results);
    });
  }, [currentPageUrl]);

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
      <ul className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <PokemonListItem key={pokemon.url} pokemon={pokemon} />
        ))}
      </ul>
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </div>
  );
};

export default PokemonList;

