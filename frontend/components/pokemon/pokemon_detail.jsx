import React from 'react';
import { values } from 'lodash';

const PokemonDetail = ({pokemon}) => {
  return (
    <ul>
      <li>
        <img src={pokemon.image_url} />
      </li>
      <li>
        {pokemon.name}
      </li>
      <li>
        Type: {pokemon.type}
      </li>
      <li>
        Attak: {pokemon.attack}
      </li>
      <li>
        Defense: {pokemon.defense}
      </li>
      <li>
        Moves: {pokemon.moves}
      </li>
      <li>
        Toys:
        <ul>
          {values(pokemon.items).map(toy => (
            <li key={toy.id}>
              <img src={toy.image_url} />
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default PokemonDetail;
