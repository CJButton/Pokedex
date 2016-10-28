import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {createNewPokemon} from './actions/pokemon_actions';

import { createPokemon } from './util/api_util';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.createPokemon = createPokemon;
  window.createNewPokemon = createNewPokemon;


  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
