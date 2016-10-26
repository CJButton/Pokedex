import React from 'react';



const PokemonIndex = ({pokemon}) => {
  return (
    <ul>
      {pokemon.map(poke => <li>{poke.name}</li>)}
    </ul>
  );
};

export default PokemonIndex;
