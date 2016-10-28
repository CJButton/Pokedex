

import {merge} from 'lodash';
import {RECEIVE_POKEMON} from '../actions/pokemon_actions';

const _defaultState = {
    moves: [],
    items: [{},{},{}]
};


function PokemonDetailReducer(oldState = _defaultState, action) {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon;
    default:
      return oldState;
  }
}

export default PokemonDetailReducer;
