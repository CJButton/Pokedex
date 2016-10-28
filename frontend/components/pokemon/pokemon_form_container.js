

import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { createNewPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createPokemon: pokemon => dispatch(createNewPokemon(pokemon))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
