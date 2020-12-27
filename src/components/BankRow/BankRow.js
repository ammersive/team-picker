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
    console.log(this.props.player.name, this.props.player.playCount, this.props.index.toString());
    return(
      // <li className="player-cell" key={ this.props.index.toString() } > 
      // {/* { this.props.player.name } 
      // { this.props.player.playCount } */}
      <button onClick={ this.handleClick }>Add</button>
    // </li>
    );
  }
}

export default BankRow;
