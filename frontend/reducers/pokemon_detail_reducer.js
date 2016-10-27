

import {merge} from 'lodash';
import {RECEIVE_POKEMON} from '../actions/pokemon_actions';


function PokemonDetailReducer(oldState = {}, action) {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon;
    default:
      return oldState;
  }
}

export default PokemonDetailReducer;
