import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 className="header">React Pokédex</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Pokédex</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;