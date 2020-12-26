import { Component } from "react";
class BankRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: props.player,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.selectPlayer({ ...this.state });
  }

  render() {
    return(
      <li className="player-cell" key={ this.state.index } > 
      { this.state.player.name } 
      { this.state.player.playCount }
      <button onClick={ this.handleClick }>Add</button>
    </li>
    );
  }
}

export default BankRow;

