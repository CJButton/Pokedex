import React from 'react';
import { values } from 'lodash';
import { withRouter } from 'react-router';

const PokemonDetail = ({pokemon , children, router}) => {
  const handleItemClick = idx => e => {
    router.push(`/pokemon/${pokemon.id}/items/${idx}`);
  };

  return (
    <ul className="poke-detail">
      <li key="image_url">
        <img src={pokemon.image_url} />
      </li>
      <li key="name">
        {pokemon.name}
      </li>
      <li key="type">
        Type: {pokemon.poke_type}
      </li>
      <li key="attack">
        Attack: {pokemon.attack}
      </li>
      <li key="defense">
        Defense: {pokemon.defense}
      </li>
      <li key="moves">
        Moves: {pokemon.moves.join(', ')}
      </li>
      <li key="toys">
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
};

export default withRouter(PokemonDetail);
