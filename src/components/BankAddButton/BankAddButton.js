import { Component } from "react";
class BankAddButton extends Component {

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
      <button onClick={ this.handleClick }>Pick</button>
    );
  }
}

export default BankAddButton;
