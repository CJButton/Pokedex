import React from 'react';
import { values } from 'lodash';
import { withRouter } from 'react-router';

const PokemonDetail = ({pokemon , children, router}) => {

  const handleItemClick = idx => e => {
    router.push(`/pokemon/${pokemon.id}/items/${idx}`);
  };

  if (pokemon.id) {
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
          Moves: {pokemon.moves.join(', ')}
        </li>
        <li>
          Toys:
          <ul>
            {values(pokemon.items).map((toy, idx) => (
              <li key={toy.id}>
                <img src={toy.image_url} onClick={handleItemClick(idx)}/>
              </li>
            ))}
          </ul>
          {children}
        </li>
      </ul>
    );
  } else {
    return (
      <div/>
    );
  }
};

export default withRouter(PokemonDetail);
