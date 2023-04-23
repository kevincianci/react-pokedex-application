import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        This React Pokédex Application is a simple web app that allows users to browse and learn about Pokémon.
        The application utilizes the PokéAPI (https://pokeapi.co/) to fetch data about each Pokémon and display
        it in an organized manner.
      </p>
      <p>
        Features of this application include a paginated list of Pokémon, detailed information about each Pokémon,
        and routing between the Pokédex and About pages using React Router.
      </p>
    </div>
  );
};

export default About;
