import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({pokemon, children}) => {
  // children here refers to the routes.
  // it gets immediate children of this route
  return (
    <section className="pokedex">
      {children}
      <ul>
        {pokemon.map(poke => <PokemonIndexItem key={poke.id} poke={poke} />)}
      </ul>
    </section>
  );
};

export default PokemonIndex;
