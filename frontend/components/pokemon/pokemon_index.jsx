import React from 'react';
import PokemonIndexItem from './pokemon_index_item';



const PokemonIndex = ({pokemon}) => {
  return (
    <section className="pokedex">
      <ul>
        {pokemon.map(poke => <PokemonIndexItem key={poke.id} poke={poke} />)}
      </ul>
    </section>
  );
};

export default PokemonIndex;
