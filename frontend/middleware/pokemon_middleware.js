import { fetchAllPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON, receiveAllPokemon } from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const error = (e) => console.log(e);
  let success;

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      success = pokemon => dispatch(receiveAllPokemon(pokemon));
      fetchAllPokemon(success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
