import React from 'react';
import typeColors from '../typeColors';

const PokemonDetails = ({ pokemon }) => {
  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const { id, name, height, weight, types, abilities, stats } = pokemon;

  return (
    <div>
      <h2>
        {id}. {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
      <p>
        Height: {height / 10}m | Weight: {weight / 10}kg
      </p>
      <h3>Types:</h3>
      <p>
        {types.map((type) => (
          <span
            key={type.type.name}
            style={{
              backgroundColor: typeColors[type.type.name],
              color: '#fff',
              borderRadius: '4px',
              padding: '2px 6px',
              marginRight: '4px',
            }}
          >
            {type.type.name}
          </span>
        ))}
      </p>
      <h3>Abilities:</h3>
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <h3>Stats:</h3>
      <ul>
        {stats.map((stat, index) => (
          <li key={index}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetails;