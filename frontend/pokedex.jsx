import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util.js';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);

  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.store = store;
  window.selectAllPokemon = selectAllPokemon;
});
