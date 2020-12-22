import { Component } from "react";

class Reshuffle extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {    
    this.props.shuffleClick();
  }

  render() {
    return(
      <button onClick={ this.handleClick }>Reshuffle</button>
    );
  }
}

export default Reshuffle;