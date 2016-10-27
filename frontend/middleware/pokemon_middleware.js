import { fetchAllPokemon, fetchPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON,
  receiveAllPokemon,
  REQUEST_POKEMON,
  receivePokemon
 } from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const error = (e) => console.log(e);
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
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
