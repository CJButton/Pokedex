

import { RECEIVE_ALL_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';


function PokemonReducer(oldState = {}, action) {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_NEW_POKEMON:
      let newState = {};
      newState[action.pokemon.id] = action.pokemon;
      merge(newState, oldState);
      return newState;
    default:
      return oldState;
  }
}


export default PokemonReducer;
