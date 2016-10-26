import {values} from 'lodash';




export function selectAllPokemon(state) {
  return values(state.pokemon);
}
