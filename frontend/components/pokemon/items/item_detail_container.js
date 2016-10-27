


import { connect } from 'react-redux';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => ({
  item: state.pokemonDetail.items[ownProps.params.itemId]
});


export default connect(
  mapStateToProps
)(ItemDetail);
