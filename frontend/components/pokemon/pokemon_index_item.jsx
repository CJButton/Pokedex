import React from 'react';
import {withRouter} from 'react-router';

const PokemonIndexItem = ({ poke, router }) => {
  const handleClick = url => e => router.push(url);

  return (
    <li
      className="pokemon-index-item"
      onClick={handleClick(`/pokemon/${poke.id}`)}>
      {poke.name}
      <img src={poke.image_url} width="20" />
    </li>
  );
};

export default withRouter(PokemonIndexItem);
