import { RECEIVE_POKEMON_ERRORS } from '../actions/pokemon_actions';

const ErrorsReducer = (oldState = [] , action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_POKEMON_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default ErrorsReducer;
