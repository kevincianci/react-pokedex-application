import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import typeColors from '../typeColors';

const PokemonListItem = ({ pokemon }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setTypes(data.types);
    };
    fetchTypes();
  }, [pokemon.url]);

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`;

  return (
    <li
      className="pokemon-list-item"
      style={{
        backgroundColor: types.length > 0 ? typeColors[types[0].type.name] : '#f9f9f9',
      }}
    >
      <Link to={`/pokemon/${pokemon.url.split('/')[6]}`}>
        <img className="pokemon-image" src={imageUrl} alt={pokemon.name} />
        <p className="pokemon-name">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </p>
      </Link>
    </li>
  );
};

export default PokemonListItem;