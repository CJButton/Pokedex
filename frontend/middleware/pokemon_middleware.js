import { fetchAllPokemon, fetchPokemon, createPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON,
  receiveAllPokemon,
  REQUEST_POKEMON,
  receivePokemon,
  CREATE_NEW_POKEMON,
  receiveNewPokemon,
  receivePokemonErrors
 } from '../actions/pokemon_actions';
 import { hashHistory } from 'react-router';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const error = (e) => console.log(e);

  const createPokemonErrors = (e) => {
    dispatch(receivePokemonErrors(e.responseJSON));
  };

  let success;

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      success = pokemon => dispatch(receiveAllPokemon(pokemon));
      fetchAllPokemon(success, error);
      return next(action);
    case REQUEST_POKEMON:
      success = pokemon => dispatch(receivePokemon(pokemon));
      fetchPokemon(success, error, action.id);
      return next(action);
    case CREATE_NEW_POKEMON:
      success = pokemon => {
        dispatch(receiveNewPokemon(pokemon));
        hashHistory.push(`/pokemon/${pokemon.id}`);
      };
      createPokemon(success, createPokemonErrors, action.pokemon);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
