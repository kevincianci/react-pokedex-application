import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import About from './components/About';
import './PokemonStyles.css';
import './App.css';
import { useParams } from 'react-router-dom';

const PokemonDetailsContainer = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [id]);

  return <PokemonDetails pokemon={pokemon} />;
};


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route
            path="/pokemon/:id"
            element={(
              <PokemonDetailsContainer />
            )}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
