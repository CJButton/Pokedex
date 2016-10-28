import React from 'react';

class PokemonForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "normal",
      attack: "",
      defense: "",
      moves: ["", ""]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
   return e => this.setState({[property]: e.target.value});
  }

  updateMove(idx) {
    return e => {
      let newMoves = this.state.moves;
      newMoves[idx] = e.target.value;
      this.setState({ moves: newMoves });
    };
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.createPokemon(this.state);
  }

  render() {
    return (
      <form>
        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        
        <ul>
          <li key="name">
            <input type="text" placeholder="Name" value={this.state.name} onChange={this.update("name")} />
          </li>
          <li key="image_url">
            <input type="text" placeholder="Image Url" value={this.state.image_url} onChange={this.update("image_url")}/>
          </li>
          <li key="poke_type">
            <select value={this.state.poke_type} onChange={this.update("poke_type")}>
              {PokemonForm.TYPES.map(
                type => <option key={type} value={type}>{type}</option>
              )}
            </select>
          </li>
          <li key="attack">
            <input type="text" placeholder="Attack" value={this.state.attack} onChange={this.update("attack")}/>
          </li>
          <li key="defense">
            <input type="text" placeholder="Defense" value={this.state.defense} onChange={this.update("defense")}/>
          </li>
          <li key="move1">
            <input type="text" placeholder="Move 1" value={this.state.moves[0]} onChange={this.updateMove("0")}/>
          </li>
          <li key="move2">
            <input type="text" placeholder="Move 2" value={this.state.moves[1]} onChange={this.updateMove("1")}/>
          </li>
          <li key="submit">
            <button onClick={this.handleSubmit}>Create Pokemon</button>
          </li>
        </ul>
      </form>
    );
  }
}

PokemonForm.TYPES = ['bug', 'dragon', 'electric', 'fighting', 'fire', 'flying',
  'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'rock', 'psychic',
  'steel', 'water'];

export default PokemonForm;
